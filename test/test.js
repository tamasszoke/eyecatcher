'use strict';

const expect = require('chai').expect;
const log = require('../index');

describe('#eyecatcher', function() {

	it('should get 0 from log', function() {

		const result = log.log('example');
		expect(result).to.equal(0);
	});

	it('should get 0 from info', function() {

		const result = log.info('example');
		expect(result).to.equal(0);
	});

	it('should get 0 from warn', function() {

		const result = log.warn('example');
		expect(result).to.equal(0);
	});

	it('should get 0 from error', function() {

		const result = log.error('example');
		expect(result).to.equal(0);
	});

	it('should get 0 from bigLog', function() {

		const result = log.bigLog('example');
		expect(result).to.equal(0);
	});

	it('should get 0 from bigInfo', function() {

		const result = log.bigInfo('example');
		expect(result).to.equal(0);
	});

	it('should get 0 from bigWarn', function() {

		const result = log.bigWarn('example');
		expect(result).to.equal(0);
	});

	it('should get 0 from bigError', function() {

		const result = log.bigError('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla velit, suscipit eget enim vel, bibendum imperdiet mauris. Pellentesque eu purus ultrices, sagittis eros a, ultrices felis. Ut vitae risus mauris. Duis ornare porttitor tempor. Sed interdum, purus non rhoncus mattis, ipsum quam efficitur nulla, eget luctus ligula eros vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis nisl in ante tempor tempus. Phasellus varius fringilla urna, non suscipit massa interdum vel. Donec scelerisque ipsum non arcu porta tincidunt eu aliquam nulla. Sed nec tincidunt nisi. Pellentesque gravida eget ligula vel aliquet.');
		expect(result).to.equal(0);
	});

	it('should get 0 from _writeOut', function() {

		const result = log._writeOut('info', 'example');
		expect(result).to.equal(0);
	});

	it('should get 0 from string validation', function() {

		const result = log._validateString('example');
		expect(result).to.equal(0);
	});

	it('should get current time', function() {

		const result = log._getTime();

		const date = new Date();
		const minutes = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
		const hours = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
		const ampm = date.getHours() >= 12 ? 'pm' : 'am';
		const time = hours + ':' + minutes + ' ' + ampm;

		expect(result).to.equal(time);
	});

	it('should get source row', function() {

		const result = log._getSourceRow();

		const trace = new Error().stack;
		let source = trace.split('at')[2].split(' ');
		if (source[2]) source = source[2].match(/\(([^)]+)\)/)[1].toString();
		else source = source[1].replace(/\s/g,'').toString();
		source = source.replace(/^.*[\\\/]/, '');

		expect(result).to.equal(source);
	});

	it('should get colors', function() {

		const result = log._getColors('info');

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

		const colors = {
			time: palette.font['blue'],
			text: palette.font['white'] + ' : ' + palette.font['green'],
			source: palette.font['white'] + ' => ' + palette.font['magenta']
		};

		expect(result).to.deep.equal(colors);
	});
});