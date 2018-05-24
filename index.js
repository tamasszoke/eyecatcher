'use strict';

/**
 * Beautiful console logging
 * @param {string} text
 * @return {bool}
 */
module.exports = eyecatcher();

function eyecatcher(text) {

	const maxBlockLength = 80;

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

	const logBlock = function(text) {

		return writeOut('logBlock', text);
	};

	const infoBlock = function(text) {

		return writeOut('infoBlock', text);
	};

	const warnBlock = function(text) {

		return writeOut('warnBlock', text);
	};

	const errorBlock = function(text) {

		return writeOut('errorBlock', text);
	};

	// private(ish) methods

	const writeOut = function(type, text) {

		validateString(text);
		
		const time = getTime();
		const source = getSourceRow();
		const colors = getColors(type);

		if (type === 'logBlock' || type === 'infoBlock' || type === 'warnBlock' || type === 'errorBlock') {

			const block = getBlock(text, type, colors);
			
			console.log(block.emptyLine, block.title, block.emptyLine, block.emptyLine, block.content, block.emptyLine, '\r\n\r\n', colors['time'], time, colors['source'], source, colors['reset'], '\r\n');

		} else {

			console.log(colors['time'], time, colors['text'], '', text, '', colors['source'], source, colors['reset']);
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

		let hours = date.getHours();
		let minutes = date.getMinutes();
		const ampm = hours >= 12 ? 'pm' : 'am';
		
		minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
		hours = hours > 12 ? hours - 12 : hours;
		const time = hours + ':' + minutes + ' ' + ampm;

		return time;
	};

	const getSourceRow = function() {
		
		const trace = new Error().stack;
		const regexp = /\.<anonymous>(.*)\n/g;

		let source = regexp.exec(trace)[1];
		source = source.replace(/^.*[\\\/]/, '').replace(/[{()}]/g, '').replace(/\n|\r/g, "");

		return source;
	};

	const getColors = function(type) {

		let colors = {};

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

		if (type === 'log') {

			colors = {
				time: palette.font['white'],
				text: palette.font['white'] + '<' + palette.font['white'],
				source: palette.font['white'] + '>' + palette.font['white']
			};

		} else if (type === 'info') {

			colors = {
				time: palette.font['blue'],
				text: palette.font['white'] + '<' + palette.font['green'],
				source: palette.font['white'] + '>' + palette.font['magenta']
			};

		} else if (type === 'warn') {

			colors = {
				time: palette.font['blue'],
				text: palette.font['white'] + '<' + palette.font['yellow'],
				source: palette.font['white'] + '>' + palette.font['magenta']
			};

		} else if (type === 'error') {

			colors = {
				time: palette.font['blue'],
				text: palette.font['white'] + '<' + palette.font['red'],
				source: palette.font['white'] + '>' + palette.font['magenta']
			};
		
		} else if (type === 'logBlock') {

			colors = {
				background: palette.background['white'],
				text: palette.font['black'],
				time: palette.font['white'],
				source: palette.font['white'] + '>' + palette.font['white']
			};
		
		} else if (type === 'infoBlock') {

			colors = {
				background: palette.background['cyan'],
				text: palette.font['black'],
				time: palette.font['blue'],
				source: palette.font['white'] + '>' + palette.font['magenta']
			};
		
		} else if (type === 'warnBlock') {

			colors = {
				background: palette.background['yellow'],
				text: palette.font['black'],
				time: palette.font['blue'],
				source: palette.font['white'] + '>' + palette.font['magenta']
			};

		} else if (type === 'errorBlock') {

			colors = {
				background: palette.background['red'],
				text: palette.font['white'],
				time: palette.font['blue'],
				source: palette.font['white'] + '>' + palette.font['magenta']
			};
		};

		colors.reset = palette.effect['reset'];

		return colors;
	};

	const splitString = function(string, size) {
	
		const re = new RegExp('.{1,' + size + '}', 'g');
		return string.match(re);
	};

	const getBlock = function(text, type, colors) {

		let content;
		let titleText = type.substr(0, type.length - 5);
		titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1);

		const whiteSpace = 5 + 3 + 6;
		const remainingTitleLength = maxBlockLength - (titleText.length + whiteSpace);
		let remainingContentLength = maxBlockLength - (text.length + whiteSpace);

		const emptyLine = '\r\n' + ''.padStart(2) + colors['background'].padEnd(74) + colors['reset'];
		const title = '\r\n' + ''.padStart(2) + colors['background'] + colors['text'] + '   ' + titleText + ''.padEnd(remainingTitleLength) + colors['reset'];

		if (remainingContentLength <= 3) {

			content = splitContent(text, colors, whiteSpace, remainingContentLength);

		} else {

			content = '\r\n' + ''.padStart(2) + colors['background'] + colors['text'] + '   ' + text + ''.padEnd(remainingContentLength) + colors['reset'];
		};

		return {
			title: title,
			content: content,
			emptyLine: emptyLine
		};
	};

	const splitContent = function(text, colors, whiteSpace, remainingContentLength) {

		let content = ''; // otherwise undefined
		const textArray = splitString(text, maxBlockLength - whiteSpace - 3);
				
		for (let i = 0; i < textArray.length; i++) {

			remainingContentLength = maxBlockLength - (textArray[i].length + whiteSpace);
			content += '\r\n' + ''.padStart(2) + colors['background'] + colors['text'] + '   ' + textArray[i] + ''.padEnd(remainingContentLength) + colors['reset'];
		};

		return content;
	};

	return {
		log: log,
		info: info,
		warn: warn,
		error: error,
		logBlock: logBlock,
		infoBlock: infoBlock,
		warnBlock: warnBlock,
		errorBlock: errorBlock,
		_writeOut: writeOut,
		_getTime: getTime,
		_getSourceRow: getSourceRow,
		_validateString: validateString,
		_getColors: getColors,
		_getBlock: getBlock,
		_splitContent: splitContent
	};
};