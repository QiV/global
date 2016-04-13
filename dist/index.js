'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsdom = require('jsdom');
var _process = _interopDefault(require('process'));

exports.document = jsdom('<html><body></body></html>');
exports.window = _document.defaultView;
exports.body = _document.body;
var _console = {};
var _navigator = {};
var _location = {};
var _html = {};
var _window$1 = exports.window;
function set(vals){
  if (vals.window) {
    exports.window = vals.window;
  }
  if (vals.body) {
    exports.body = vals.body;
  }
  if (vals.document) {
    exports.document = vals.document;
  }
}

exports['default'] = _window$1;
exports.console = _console;
exports.navigator = _navigator;
exports.location = _location;
exports.html = _html;
exports.process = _process;
exports.set = set;