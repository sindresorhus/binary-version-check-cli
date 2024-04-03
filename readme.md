# binary-version-check-cli

> Check whether a binary version satisfies a [semver range](https://github.com/npm/node-semver#ranges)

Useful when you have a thing that only works with specific versions of a binary.

## Install

```sh
npm install --global binary-version-check-cli
```

## Usage

```console
$ binary-version-check --help

  Usage
    $ binary-version-check <binary> <semver-range>

  Options
    --args  CLI args to get binary version (Can be set multiple times) [Default: --version]

  Example
    $ curl --version
    curl 7.30.0 (x86_64-apple-darwin13.0)
    $ binary-version-check curl '>=8'
    curl 7.30.0 doesn't satisfy the version requirement of >=8

  Exits with code 0 if the semver range is satisfied and 1 if not
```

## Related

- [binary-version-check](https://github.com/sindresorhus/binary-version-check) - API for this package
