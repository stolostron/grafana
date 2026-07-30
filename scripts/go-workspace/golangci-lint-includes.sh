#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

REPO_ROOT=$(dirname "${BASH_SOURCE[0]}")/../..
INCLUDES=$(go run scripts/go-workspace/main.go list-submodules --path "${REPO_ROOT}/go.work" --delimiter '/... ' --skip golangci-lint)

# Any package under pkg/build that imports dagger.io/dagger, directly or
# transitively (pkg/build/a11y, all of pkg/build/daggerbuild/..., and the CLI
# entrypoints that call into them, e.g. pkg/build/cmd, pkg/build/e2e), pulls in
# dagger.io/dagger@v0.18.8. That version requires a pre-v0.13 otel/sdk/log
# Processor interface, which conflicts with the otel/sdk/log version resolved
# elsewhere in this module and makes these packages fail to typecheck.
# golangci-lint can't ignore or suppress typecheck errors (they block all
# analysis for a package and can't be filtered via .golangci.yml exclusions),
# so instead we replace the blanket "./pkg/build/..." pattern (added above via
# list-submodules, since pkg/build is its own Go module) with an explicit
# package list that leaves these out. The list is computed dynamically from
# the dependency graph (rather than hardcoded) so it stays correct as
# pkg/build/daggerbuild evolves. These are Dagger-based build/CI tooling, not
# part of the Grafana runtime or this fork's CI, so excluding them from lint
# doesn't affect anything this fork actually builds, tests, or ships.
BUILD_PACKAGES=$(cd "${REPO_ROOT}/pkg/build" \
	&& go list -deps -f '{{.ImportPath}}{{"\t"}}{{join .Deps ","}}' ./... \
	| awk -F'\t' '$1 !~ /dagger\.io\/dagger/ && $2 !~ /dagger\.io\/dagger/ {print $1}' \
	| grep '^github.com/grafana/grafana/pkg/build' \
	| sed 's#^github.com/grafana/grafana/pkg/build#./pkg/build#')
INCLUDES=$(echo "${INCLUDES}" | tr ' ' '\n' | grep -v '^\./pkg/build/\.\.\.$' | tr '\n' ' ')

# ./pkg/... is manually added to cover the root package without including scripts and devenv
printf './pkg/... %s%s' "${INCLUDES}" "${BUILD_PACKAGES}"
