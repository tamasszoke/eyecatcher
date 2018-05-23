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

![Image of Yaktocat](https://github.com/tamasszoke/eyecatcher/blob/master/docs/eyecatcher.png?raw=true)

## Tests

  `npm test`

## License

<b>The MIT License (MIT)</b><br/>
Copyright (c) 2017 Tamas Szoke

https://opensource.org/licenses/MIT
