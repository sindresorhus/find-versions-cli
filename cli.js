#!/usr/bin/env node
import meow from 'meow';
import findVersions from 'find-versions';

const cli = meow(`
	Usage
	  $ find-versions <input> [--first] [--loose]

	Options
	  --all    Return all matches instead of just the first
	  --loose  Match non-semver versions like 1.88

	Example
	  $ find-versions 'unicorn v1.2.3'
	  1.2.3

	Exits with code 2 if it could not find any versions
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

const versions = findVersions(input, {loose: cli.flags.loose});

if (versions.length === 0) {
	console.error('Could not find any versions in the input');
	process.exit(2);
}

console.log(cli.flags.all ? versions.join('\n') : versions[0]);
