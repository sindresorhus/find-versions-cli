# find-versions-cli

> Find semver versions in a string: `unicorn v1.2.3` → `1.2.3`

Check out [`bin-version-cli`](https://github.com/sindresorhus/bin-version-cli) if you need to find the version of a binary.

## Install

```
$ npm install --global find-versions-cli
```

## Usage

```
$ find-versions --help

  Usage
    $ find-versions <input> [--first] [--loose]

  Options
    --all    Return all matches instead of just the first
    --loose  Match non-semver versions like 1.88

  Example
    $ find-versions 'unicorn v1.2.3'
    1.2.3

  Exits with code 2 if it could not find any versions
```

## Related

- [find-versions](https://github.com/sindresorhus/find-versions) - API for this module
- [bin-version-cli](https://github.com/sindresorhus/bin-version-cli) - Get the version of a binary in semver format
