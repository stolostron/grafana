#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

REPO_ROOT=$(dirname "${BASH_SOURCE[0]}")/../..
INCLUDES=$(go run scripts/go-workspace/main.go list-submodules --path "${REPO_ROOT}/go.work" --delimiter '/... ' --skip golangci-lint)

# golangci-lint can't ignore or suppress typecheck errors (they block all
# analysis for a package and can't be filtered via .golangci.yml exclusions),
# so we replace the blanket "./pkg/build/..." pattern (added above via
# list-submodules, since pkg/build is its own Go module) with an explicit
# list of the pkg/build packages that don't depend on dagger.io/dagger. See
# pkg-build-non-dagger-packages.sh for why.
BUILD_PACKAGES=$("${REPO_ROOT}/scripts/go-workspace/pkg-build-non-dagger-packages.sh" | tr '\n' ' ')
INCLUDES=$(echo "${INCLUDES}" | tr ' ' '\n' | grep -v '^\./pkg/build/\.\.\.$' | tr '\n' ' ')

# ./pkg/... is manually added to cover the root package without including scripts and devenv
printf './pkg/... %s%s' "${INCLUDES}" "${BUILD_PACKAGES}"
