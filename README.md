[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions.svg)](https://npmjs.org/package/@dizmo/functions)
[![Build Status](https://travis-ci.com/dizmo/functions.svg?branch=master)](https://travis-ci.com/dizmo/functions)
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
const functions = require('@dizmo/functions');
```

### Examples

```typescript
import { agent } from '@dizmo/functions'
```

```typescript
import { after, before } from '@dizmo/functions'
```

```typescript
import { buffered, queued } from '@dizmo/functions'
```

```typescript
import { experimental, unexperimental } from '@dizmo/functions';
```

```typescript
import { deprecated, undeprecated } from '@dizmo/functions';
```

```typescript
import { filter } from '@dizmo/functions'
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
```

```typescript
import { tree2array, tree2object } from '@dizmo/functions'
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

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

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Documentation

```sh
npm run docs
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

 © 2021 [dizmo AG](https://dizmo.com/), Switzerland
