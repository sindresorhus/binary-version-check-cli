#!/usr/bin/env node
import meow from 'meow';
import binaryVersionCheck from 'binary-version-check';

const cli = meow(`
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
`, {
	importMeta: import.meta,
	flags: {
		args: {
			type: 'string',
			default: [
				'--version',
			],
			isMultiple: true,
		},
	},
});

const [binary, semverRange] = cli.input;

binaryVersionCheck(binary, semverRange, cli.flags);
