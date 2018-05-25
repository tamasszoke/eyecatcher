'use strict';

const expect = require('chai').expect;
const log = require('../index');
const text = 'Example text';

const palette = {
	effect: {
		reset: "\x1b[0m",
		bright: "\x1b[1m",
		dim: "\x1b[2m",
		underscore: "\x1b[4m",
		blink: "\x1b[5m",
		reverse: "\x1b[7m",
		hidden: "\x1b[8m"
	},
	font: {
		black: "\x1b[30m",
		red: "\x1b[31m",
		green: "\x1b[32m",
		yellow: "\x1b[33m",
		blue: "\x1b[34m",
		magenta: "\x1b[35m",
		cyan: "\x1b[36m",
		white: "\x1b[37m"
	},
	background: {
		black: "\x1b[40m",
		red: "\x1b[41m",
		green: "\x1b[42m",
		yellow: "\x1b[43m",
		blue: "\x1b[44m",
		magenta: "\x1b[45m",
		cyan: "\x1b[46m",
		white: "\x1b[47m"
	}
};

describe('#eyecatcher', function() {

	it('should get 0 from log', function() {

		const result = log.log(text);
		expect(result).to.equal(0);
	});

	it('should get 0 from info', function() {

		const result = log.info(text);
		expect(result).to.equal(0);
	});

	it('should get 0 from warn', function() {

		const result = log.warn(text);
		expect(result).to.equal(0);
	});

	it('should get 0 from error', function() {

		const result = log.error(text);
		expect(result).to.equal(0);
	});

	it('should get 0 from logBlock', function() {

		const result = log.logBlock(text);
		expect(result).to.equal(0);
	});

	it('should get 0 from infoBlock', function() {

		const result = log.infoBlock(text);
		expect(result).to.equal(0);
	});

	it('should get 0 from warnBlock', function() {

		const result = log.warnBlock(text);
		expect(result).to.equal(0);
	});

	it('should get 0 from errorBlock', function() {

		const result = log.errorBlock('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla velit, suscipit eget enim vel, bibendum imperdiet mauris. Pellentesque eu purus ultrices, sagittis eros a, ultrices felis. Ut vitae risus mauris. Duis ornare porttitor tempor.');
		expect(result).to.equal(0);
	});

	it('should get 0 from writeOut', function() {

		const result = log._writeOut('info', 'example');
		expect(result).to.equal(0);
	});

	it('should return string from validateString', function() {

		const result = log._validateString('example');
		expect(result).to.be.a('string');
	});

	it('should get current time', function() {

		const result = log._getTime();

		const date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		const ampm = hours >= 12 ? 'pm' : 'am';
		minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
		hours = hours > 12 ? hours - 12 : hours;
		const time = hours + ':' + minutes + ' ' + ampm;

		expect(result).to.equal(time);
	});

	it('should get source row', function() {

		const result = 'test.js';

		const trace = new Error().stack;
		let source = trace.split('at')[2].split(' ');		
		source = source[0].replace(/^.*[\\\/]/, '').replace(/[{()}]/g, '').replace(/\n|\r/g, "");

		expect(source).to.include(result);
	});

	it('should get colors object', function() {

		const result = log._getColors('info');
		expect(result).to.be.an('object');
	});

	it('should return object from getBlock', function() {

		const colors = {
			background: palette.background['white'],
			text: palette.font['black'],
			time: palette.font['white'],
			source: palette.font['white'] + '>' + palette.font['white'],
			reset: palette.effect['reset']
		};

		const result = log._getBlock('text', 'log', colors);

		expect(result).to.be.an('object');
	});

	it('should return string from splitContent', function() {

		const colors = {
			background: palette.background['white'],
			text: palette.font['black'],
			time: palette.font['white'],
			source: palette.font['white'] + '>' + palette.font['white'],
			reset: palette.effect['reset']
		};

		const result = log._splitContent('text', colors, 5, 5);

		expect(result).to.be.a('string');
	});

	it('should return bool from isArray', function() {

		let result = log._isArray('text');
		expect(result).to.equal(false);
	});

	it('should return bool from isObject', function() {

		let result = log._isObject('text');
		expect(result).to.equal(false);
	});
});