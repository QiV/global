import { jsdom } from 'jsdom';
import _process from 'process';
var _document = jsdom('<html><body></body></html>');
var _window = _document.defaultView;
var _body = _document.body;
var _console = {};
var _navigator = {};
var _location = {};
var _html = {};
export default _window;
export {
  _window as window,
  _body as body,
  _console as console,
  _document as document,
  _navigator as navigator,
  _location as location,
  _html as html,
  _process as process,
  set
};

function set(vals){
  if (vals.window) {
    _window = vals.window;
  }
  if (vals.body) {
    _body = vals.body;
  }
  if (vals.document) {
    _document = vals.document;
  }
}
