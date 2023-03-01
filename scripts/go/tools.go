//go:build tools
// +build tools

package main

import (
	_ "github.com/golangci/golangci-lint/cmd/golangci-lint"
	_ "github.com/google/subcommands"
	_ "github.com/google/wire/cmd/wire"
	_ "github.com/unknwon/bra"
)
