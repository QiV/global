'use strict';

var body = document.body;
var html = document.documentElement;
var _console = console || {log: noop, warn: noop, debug: noop, error: noop, table: noop};
var _window = self || window;
var head = document.head || document.getElementsByTagName('head')[0];
var process = {};
function noop (){}

//var navigator = window.navigator;

//export {window, document /*navigator*/};

exports['default'] = _window;
exports.window = _window;
exports.console = _console;
exports.body = body;
exports.head = head;
exports.document = document;
exports.navigator = navigator;
exports.location = location;
exports.html = html;
exports.process = process;