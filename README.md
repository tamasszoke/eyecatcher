EyeCatcher
=========

[![Build Status](https://travis-ci.org/tamasszoke/eyecatcher.svg?branch=master)](https://travis-ci.org/tamasszoke/eyecatcher) [![Coverage Status](https://coveralls.io/repos/github/tamasszoke/eyecatcher/badge.svg?branch=master)](https://coveralls.io/github/tamasszoke/eyecatcher?branch=master) [![npm version](https://badge.fury.io/js/eyecatcher.svg)](https://badge.fury.io/js/eyecatcher)

A tiny library that creates beautiful logging.

## Installation

  `npm install eyecatcher`

## Usage

    const eyecatcher = require('eyecatcher');

Prints your message, time and position in the code:

    eyecatcher.log('Log', 'example');
    eyecatcher.info('Info', 'example');
    eyecatcher.warn('Warning example');
    eyecatcher.error('Error example');

Prints a block with your message:

    eyecatcher.logBlock('Log block example');
    eyecatcher.infoBlock('Info block example. Array:', yourArray);
    eyecatcher.warnBlock('Warning block example. JSON:', yourJson);
    eyecatcher.errorBlock('Error block example.');

You can use an array or an object.

## Examples

![EyeCatcher](https://github.com/tamasszoke/eyecatcher/blob/master/docs/eyecatcher.png?raw=true)

## Tests

  `npm test`

## License

<b>The MIT License (MIT)</b><br/>
Copyright (c) 2018 Tamas Szoke

https://opensource.org/licenses/MIT
