[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions.svg)](https://npmjs.org/package/@dizmo/functions)
[![Build Status](https://travis-ci.org/dizmo/functions.svg?branch=master)](https://travis-ci.org/dizmo/functions)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions?branch=master)

# @dizmo/functions
Library of useful functions, which can be used in developing dizmos.

## Usage
### Install
```sh
npm install @dizmo/functions --save
```
### Require
```javascript
let lib = require('@dizmo/functions');
```
### Examples

<a href="https://github.com/dizmo/functions-after"><style scoped>a { color: inherit; }</style><div class="highlight highlight-source-ts"><pre><span class="pl-k">import</span> { <span class="pl-smi">after</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>@dizmo/functions<span class="pl-pds">'</span></span></pre></div></a>

<a href="https://github.com/dizmo/functions-before"><style scoped>a { color: inherit; }</style><div class="highlight highlight-source-ts"><pre><span class="pl-k">import</span> { <span class="pl-smi">before</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>@dizmo/functions<span class="pl-pds">'</span></span></pre></div></a>

<a href="https://github.com/dizmo/functions-buffered"><style scoped>a { color: inherit; }</style><div class="highlight highlight-source-ts"><pre><span class="pl-k">import</span> { <span class="pl-smi">buffered</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>@dizmo/functions<span class="pl-pds">'</span></span></pre></div></a>

<a href="https://github.com/dizmo/functions-partial"><style scoped>a { color: inherit; }</style><div class="highlight highlight-source-ts"><pre><span class="pl-k">import</span> { <span class="pl-smi">partial</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>@dizmo/functions<span class="pl-pds">'</span></span></pre></div></a>

<a href="https://github.com/dizmo/functions-random"><style scoped>a { color: inherit; }</style><div class="highlight highlight-source-ts"><pre><span class="pl-k">import</span> { <span class="pl-smi">random</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>@dizmo/functions<span class="pl-pds">'</span></span></pre></div></a>

<a href="https://github.com/dizmo/functions-uuid"><style scoped>a { color: inherit; }</style><div class="highlight highlight-source-ts"><pre><span class="pl-k">import</span> { <span class="pl-smi">UUID</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>@dizmo/functions<span class="pl-pds">'</span></span></pre></div></a>

## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [dizmo AG](http://dizmo.com/), Switzerland
