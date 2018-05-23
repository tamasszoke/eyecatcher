EyeCatcher
=========

[![Build Status](https://travis-ci.org/tamasszoke/eyecatcher.svg?branch=master)](https://travis-ci.org/tamasszoke/eyecatcher) [![Coverage Status](https://coveralls.io/repos/github/tamasszoke/eyecatcher/badge.svg?branch=master)](https://coveralls.io/github/tamasszoke/eyecatcher?branch=master)

A tiny library that creates beautiful logging.

## Installation

  `npm install @tamasszoke/eyecatcher`

## Usage

    const eyecatcher = require('@tamasszoke/eyecatcher');

    eyecatcher.log('Hello World!')
    eyecatcher.info('Hello Info!');
    eyecatcher.error('Hello Error!');
    eyecatcher.big('Watch Me!');

## Tests

  `npm test`