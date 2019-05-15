[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions.svg)](https://npmjs.org/package/@dizmo/functions)
[![Build Status](https://travis-ci.org/dizmo/functions.svg?branch=master)](https://travis-ci.org/dizmo/functions)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions?branch=master)

# @dizmo/functions

Library of useful functions, which can be used to develop dizmos.

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

```typescript
import { after } from '@dizmo/functions'
```

```typescript
import { before } from '@dizmo/functions'
```

```typescript
import { buffered } from '@dizmo/functions'
```

```typescript
import { partial } from '@dizmo/functions'
```

```typescript
import { random } from '@dizmo/functions'
```

```typescript
import { trace, traceable } from '@dizmo/functions'
```

```typescript
import { array2tree, object2tree } from '@dizmo/functions'
import { tree2array, tree2object } from '@dizmo/functions'
```

## Development

### Build

```sh
npm run build
```

#### without linting:

```sh
npm run -- build --no-lint
```

#### with UMD support (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD support (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

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

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2019 [dizmo AG](http://dizmo.com/), Switzerland
