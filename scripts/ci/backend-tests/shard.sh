#!/usr/bin/env bash
set -euo pipefail

usage() {
    {
        echo "shard.sh: Shard tests for parallel execution in CI."
        echo "usage: $0 [-h] -n <shard> -m <total_shards> [-d <directory>] [-s]"
        echo
        echo "  -h: Show this help message."
        echo "  -n: The shard number (1-indexed)."
        echo "  -m: The total number of shards. Must be equal to or greater than -n."
        echo "  -N: The shard in shard notation (n/m), corresponding to -n and -m."
        echo "  -d: The directory to find packages with tests in."
        echo "      Can be a path or a /... style pattern."
        echo "      Can be repeated to specify multiple directories."
        echo "      Can be - to read from stdin."
        echo "      Default: ./..."
        echo "  -s: Split final package list with spaces rather than newlines."
    } >&2
}

is_int() {
    # we can't just return the result of the regex match shellcheck is unhappy...
    if [[ "$1" =~ ^[0-9]+$ ]]; then
        return 0
    else
        return 1
    fi
}

n=0
m=0
dirs=()
s=0
while getopts ":hn:m:d:sN:" opt; do
    case $opt in
        h)
            usage
            exit 0
            ;;
        n)
            if ! is_int "$OPTARG"; then
                echo "Error: -n must be an integer." >&2
                usage
                exit 1
            fi
            n=$OPTARG
            ;;
        m)
            if ! is_int "$OPTARG"; then
                echo "Error: -m must be an integer." >&2
                usage
                exit 1
            fi
            m=$OPTARG
            ;;
        N)
            if [[ "$OPTARG" =~ ^([0-9]+)/([0-9]+)$ ]]; then
                n="${BASH_REMATCH[1]}"
                m="${BASH_REMATCH[2]}"
            else
                echo "Error: -N must be in the form n/m." >&2
                usage
                exit 1
            fi
            ;;
        d)
            dirs+=("$OPTARG")
            ;;
        s)
            s=1
            ;;
        \?)
            echo "Invalid option: -$OPTARG" >&2
            usage
            exit 1
            ;;
        :)
            echo "Option -$OPTARG requires an argument." >&2
            usage
            exit 1
            ;;
    esac
done
shift $((OPTIND - 1))

if [[ $n -eq 0 || $m -eq 0 ]]; then
    echo "Error: -n and -m are required." >&2
    usage
    exit 1
fi
if [[ $n -lt 1 || $m -lt 1 ]]; then
    echo "Error: -n and -m must be greater than 0." >&2
    usage
    exit 1
fi
if [[ $n -gt $m ]]; then
    echo "Error: -n must be less than or equal to -m." >&2
    usage
    exit 1
fi
if [[ ${#dirs[@]} -eq 0 ]]; then
    readarray -t dirs <<< "$(find . -type f -name 'go.mod' -exec dirname '{}' ';' | awk '{ print $1 "/..."; }')"
    # pkg/build pulls in dagger.io/dagger@v0.18.8, which requires a pre-v0.13
    # otel/sdk/log Processor interface that conflicts with the otel/sdk/log
    # version resolved elsewhere in this module. That breaks `go test`
    # compilation for pkg/build/a11y, all of pkg/build/daggerbuild/..., and
    # the CLI entrypoints that call into them (e.g. pkg/build/cmd,
    # pkg/build/e2e). Replace the blanket "./pkg/build/..." entry with an
    # explicit list of the pkg/build packages that don't depend on
    # dagger.io/dagger, so those packages still get built/tested.
    SCRIPT_DIR=$(dirname "${BASH_SOURCE[0]}")
    filtered_dirs=()
    for d in "${dirs[@]}"; do
        if [[ "$d" == "./pkg/build/..." ]]; then
            while IFS= read -r safe_pkg; do
                filtered_dirs+=("$safe_pkg")
            done < <("${SCRIPT_DIR}/../../go-workspace/pkg-build-non-dagger-packages.sh")
        else
            filtered_dirs+=("$d")
        fi
    done
    dirs=("${filtered_dirs[@]}")
fi
# If dirs is just ("-"), read from stdin instead.
if [[ ${#dirs[@]} -eq 1 && "${dirs[0]}" == "-" ]]; then
    dirs=()
    while IFS= read -r line; do
        dirs+=("$line")
    done
fi
if [[ $n -eq 1 && $m -eq 1 ]]; then
    # If there is only one shard, just return all packages.
    for pkg in "${dirs[@]}"; do
        if [ $s -eq 1 ]; then
            printf "%s " "$pkg"
        else
            printf "%s\n" "$pkg"
        fi
    done
    exit 0
fi

readarray -t PACKAGES <<< "$(go list -f '{{.Dir}}' -e "${dirs[@]}")"
if [[ ${#PACKAGES[@]} -eq 0 ]]; then
    echo "No packages found in directories: ${dirs[*]}" >&2
    exit 1
fi

for i in "${!PACKAGES[@]}"; do
    if [ -z "$(find "${PACKAGES[i]}" -maxdepth 1 -type f -name '*_test.go' -printf '.' -quit)" ]; then
        # There are no test files in this package.
        unset 'PACKAGES[i]'
    fi
done

for i in "${!PACKAGES[@]}"; do
    if (( (i % m) + 1 != n )); then
        unset 'PACKAGES[i]'
    fi
done

for pkg in "${PACKAGES[@]}"; do
    if [ $s -eq 1 ]; then
        printf "%s " "$pkg"
    else
        printf "%s\n" "$pkg"
    fi
done
