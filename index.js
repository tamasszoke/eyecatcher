'use strict';

/**
 * Beautiful console logging
 * @param {string} text
 * @return {bool}
 */
module.exports = new eyecatcher();

function eyecatcher(text) {

	const maxBigLength = 80;

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

	// public methods

	const log = function(text) {

		return writeOut('log', text);
	};

	const info = function(text) {

		return writeOut('info', text);
	};

	const warn = function(text) {

		return writeOut('warn', text);
	};

	const error = function(text) {

		return writeOut('error', text);
	};

	const bigLog = function(text) {

		return writeOut('bigLog', text);
	};

	const bigInfo = function(text) {

		return writeOut('bigInfo', text);
	};

	const bigWarn = function(text) {

		return writeOut('bigWarn', text);
	};

	const bigError = function(text) {

		return writeOut('bigError', text);
	};

	// private(ish) methods

	const writeOut = function(type, text) {

		validateString(text);
		
		const time = getTime();
		const source = getSourceRow();
		const colors = getColors(type);

		if (type === 'bigLog' || type === 'bigInfo' || type === 'bigWarn' || type === 'bigError') {

			let content = '';
			const bigTitle = type.substr(3);
			const remainingTitleLength = maxBigLength - (bigTitle.length + 5 + 3 + 6);
			let remainingLength = maxBigLength - (text.length + 5 + 3 + 6);

			if (remainingLength <= 3) {

				const textArray = splitString(text, maxBigLength - 5 - 3 - 6 - 3);
				
				for (let i = 0; i < textArray.length; i++) {

					remainingLength = maxBigLength - (textArray[i].length + 5 + 3 + 6);
					content += '\r\n' + ''.padStart(5) + colors['background'] + colors['text'] + '   ' + textArray[i] + ''.padEnd(remainingLength) + palette.effect['reset'];
				};

			} else {

				content = '\r\n' + ''.padStart(5) + colors['background'] + colors['text'] + '   ' + text + ''.padEnd(remainingLength) + palette.effect['reset'];
			};

			const emptyLine = '\r\n' + ''.padStart(5) + colors['background'].padEnd(74) + palette.effect['reset'];
			const title = '\r\n' + ''.padStart(5) + colors['background'] + colors['text'] + '   ' + bigTitle + ''.padEnd(remainingTitleLength) + palette.effect['reset'];

			console.log(emptyLine, title, emptyLine, emptyLine, content, emptyLine, '\r\n');

		} else {

			console.log(colors['time'], time, colors['text'], text, colors['source'], source, palette.effect['reset']);
		};

		return 0;
	};

	const validateString = function(text) {

		if (text.length === 0) {
        
        	console.log('String, Please!');
        	return 1;
    	
    	} else if (typeof text === 'function') {

        	console.log('¯\\_(ツ)_/¯');
    		return 1;

    	} else {

    		return 0;
    	};
	};

	const getTime = function() {

		const date = new Date();

		const minutes = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
		const hours = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
		const ampm = date.getHours() >= 12 ? 'pm' : 'am';

		const time = hours + ':' + minutes + ' ' + ampm;

		return time;
	};

	const getSourceRow = function() {

		const trace = new Error().stack;
		let source = trace.split('at')[2].split(' ');
		
		if (source[2]) source = source[2].match(/\(([^)]+)\)/)[1].toString();
		else source = source[1].replace(/\s/g,'').toString();

		source = source.replace(/^.*[\\\/]/, '');

		return source;
	};

	const getColors = function(type) {

		let colors = {};

		if (type === 'log') {

			colors = {
				time: palette.font['white'],
				text: palette.font['white'] + ' : ' + palette.font['white'],
				source: palette.font['white'] + ' => ' + palette.font['white']
			};

		} else if (type === 'info') {

			colors = {
				time: palette.font['blue'],
				text: palette.font['white'] + ' : ' + palette.font['green'],
				source: palette.font['white'] + ' => ' + palette.font['magenta']
			};

		} else if (type === 'warn') {

			colors = {
				time: palette.font['blue'],
				text: palette.font['white'] + ' : ' + palette.font['yellow'],
				source: palette.font['white'] + ' => ' + palette.font['magenta']
			};

		} else if (type === 'error') {

			colors = {
				time: palette.font['blue'],
				text: palette.font['white'] + ' : ' + palette.font['red'],
				source: palette.font['white'] + ' => ' + palette.font['magenta']
			};
		
		} else if (type === 'bigLog') {

			colors = {
				background: palette.background['white'],
				text: palette.font['black']
			};
		
		} else if (type === 'bigInfo') {

			colors = {
				background: palette.background['cyan'],
				text: palette.font['black']
			};
		
		} else if (type === 'bigWarn') {

			colors = {
				background: palette.background['yellow'],
				text: palette.font['black']
			};

		} else if (type === 'bigError') {

			colors = {
				background: palette.background['red'],
				text: palette.font['white']
			};
		};

		return colors;
	};

	const splitString = function(string, size) {
	
		const re = new RegExp('.{1,' + size + '}', 'g');
		return string.match(re);
	};

	return {
		log: log,
		info: info,
		warn: warn,
		error: error,
		bigLog: bigLog,
		bigInfo: bigInfo,
		bigWarn: bigWarn,
		bigError: bigError,
		_writeOut: writeOut,
		_getTime: getTime,
		_getSourceRow: getSourceRow,
		_validateString: validateString,
		_getColors: getColors
	};
};