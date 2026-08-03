#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

# Prints, one per line, the import paths (relative to the repo root, e.g.
# "./pkg/build/config") of packages under pkg/build that do NOT depend,
# directly or transitively, on dagger.io/dagger.
#
# dagger.io/dagger@v0.18.8 requires a pre-v0.13 otel/sdk/log Processor
# interface, which conflicts with the otel/sdk/log version resolved
# elsewhere in this module. That makes every package that imports
# dagger.io/dagger (pkg/build/a11y, all of pkg/build/daggerbuild/..., and the
# CLI entrypoints that call into them, e.g. pkg/build/cmd, pkg/build/e2e)
# fail to build, breaking both `golangci-lint` typecheck and `go test`
# compilation for those packages.
#
# This list is computed dynamically from the dependency graph (rather than
# hardcoded) so it stays correct as pkg/build/daggerbuild evolves. It's
# shared by scripts/go-workspace/golangci-lint-includes.sh and
# scripts/ci/backend-tests/shard.sh so both stay in sync about which
# pkg/build packages are safe to lint/build/test.

REPO_ROOT=$(dirname "${BASH_SOURCE[0]}")/../..

cd "${REPO_ROOT}/pkg/build" \
	&& go list -deps -f '{{.ImportPath}}{{"\t"}}{{join .Deps ","}}' ./... \
	| awk -F'\t' '$1 !~ /dagger\.io\/dagger/ && $2 !~ /dagger\.io\/dagger/ {print $1}' \
	| grep '^github.com/grafana/grafana/pkg/build' \
	| sed 's#^github.com/grafana/grafana/pkg/build#./pkg/build#'
