EyeCatcher
=========

[![Build Status](https://travis-ci.org/tamasszoke/eyecatcher.svg?branch=master)](https://travis-ci.org/tamasszoke/eyecatcher) [![Coverage Status](https://coveralls.io/repos/github/tamasszoke/eyecatcher/badge.svg?branch=master)](https://coveralls.io/github/tamasszoke/eyecatcher?branch=master) [![npm version](https://badge.fury.io/js/eyecatcher.svg)](https://badge.fury.io/js/eyecatcher) ![npm](https://img.shields.io/npm/l/express.svg)


A tiny library that creates beautiful logging.

## Installation

  `npm install eyecatcher`

## Usage

    const eyecatcher = require('eyecatcher');

Prints your message, time and position in the code:

    eyecatcher.log('Hello World!');
    eyecatcher.info('Hello Info!');
    eyecatcher.warn('Hello Warn!');
    eyecatcher.error('Hello Error!');

Prints a block with your message:

    eyecatcher.bigLog('Hello Big World!');
    eyecatcher.bigInfo('Hello Big Info!');
    eyecatcher.bigWarn('Hello Big Warn!');
    eyecatcher.bigError('Hello Big Error!');

## Examples



## Tests

  `npm test`

## License

<b>The MIT License (MIT)</b><br/>
Copyright (c) 2017 Tamas Szoke

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://opensource.org/licenses/MIT
