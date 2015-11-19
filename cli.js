#!/usr/bin/env node
'use strict';
const getStdin = require('get-stdin');
const meow = require('meow');
const fn = require('find-versions');

const cli = meow(`
	Usage
	  $ find-versions <input> [--first] [--loose]
	  $ echo <input> | find-versions

	Options
	  --all    Return all matches instead of just the first
	  --loose  Match non-semver versions like 1.88

	Examples',
	  $ find-versions 'unicorn v1.2.3'
	  1.2.3
	  $ curl --version | find-versions
	  7.30.0
`, {
	string: ['_']
});

function init(data) {
	const ret = fn(data, {loose: cli.flags.loose});
	console.log(cli.flags.all ? ret.join('\n') : ret[0]);
}

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	getStdin().then(init);
}
