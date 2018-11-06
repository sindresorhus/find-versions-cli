# find-versions-cli [![Build Status](https://travis-ci.com/sindresorhus/find-versions-cli.svg?branch=master)](https://travis-ci.com/sindresorhus/find-versions-cli)

> Find semver versions in a string: `unicorn v1.2.3` → `1.2.3`


## Install

```
$ npm install --global find-versions-cli
```


## Usage

```
$ find-versions --help

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
```


## Related

- [find-versions](https://github.com/sindresorhus/find-versions) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
