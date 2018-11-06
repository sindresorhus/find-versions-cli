#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const findVersions = require('find-versions');

const cli = meow(`
	Usage
	  $ find-versions <input> [--first] [--loose]
	  $ echo <input> | find-versions

	Options
	  --all    Return all matches instead of just the first
	  --loose  Match non-semver versions like 1.88

	Examples
	  $ find-versions 'unicorn v1.2.3'
	  1.2.3
	  $ curl --version | find-versions
	  7.30.0
`, {
	flags: {
		all: {
			type: 'boolean'
		},
		loose: {
			type: 'boolean'
		}
	}
});

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

(async () => {
	const data = input ? input : await getStdin();
	const versions = findVersions(data, {loose: cli.flags.loose});

	console.log(cli.flags.all ? versions.join('\n') : versions[0]);
})();
