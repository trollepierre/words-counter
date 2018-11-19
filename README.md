# Words Counter

> A library to count words' occurrence   

## Install
``` sh
yarn add @pierretrolle/words-counter
```

## Usage

```js
var wordsCounter = require('@pierretrolle/words-counter');

wordsCounter('This is a text with some text double occurrences.');
```

Results:
```
  {
    "double": 1,
    "is": 1,
    "occurrences": 1,
    "some": 1,
    "text": 2,
    "this": 1,
    "with": 1
  }
```

## Init environment for development

``` bash
# install Yarn
npm install -g yarn@1.10.1
```

## Build Setup

``` bash
# install dependencies
yarn
```

## Lint and Test
```
# start linter
yarn lint

# fix linter errors
yarn lint:fix

# run all tests
yarn test

# run all tests in watch mode
yarn test:watch
```
