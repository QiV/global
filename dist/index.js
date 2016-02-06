'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsdom = require('jsdom');

var _process2 = require('process');

var _process3 = _interopRequireDefault(_process2);

var _document = (0, _jsdom.jsdom)('<html><body></body></html>');
var _window = _document.defaultView;
var _body = _document.body;
var _console = {};
var _navigator = {};
var _location = {};
var _html = {};
exports['default'] = _window;
exports.window = _window;
exports.body = _body;
exports.console = _console;
exports.document = _document;
exports.navigator = _navigator;
exports.location = _location;
exports.html = _html;
exports.process = _process3['default'];
exports.set = set;

function set(vals) {
  if (vals.window) {
    exports.window = _window = vals.window;
  }
  if (vals.body) {
    exports.body = _body = vals.body;
  }
  if (vals.document) {
    exports.document = _document = vals.document;
  }
}