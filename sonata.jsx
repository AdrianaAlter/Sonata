var AppDispatcher = require('./dispatcher/Dispatcher');
var React = require('react');
var ReactDOM = require('react-dom');
var Organ = require('./components/Organ.jsx');
var KeyListener = require('./util/KeyListener');

var Mapping = {
  90: "C 4",
  88: "C# 4",
  67: "D 4",
  86: "D# 4",
  66: "E 4",
  78: "F 4",
  77: "F# 4",
  188: "G 4",
  190: "G# 4",
  191: "A 4",
  16: "A# 4",
  35: "B 4",
  65: "C 5",
  83: "C# 5",
  68: "D 5",
  70: "D# 5",
  71: "E 5",
  72: "F 5",
  74: "F# 5",
  75: "G 5",
  76: "G# 5",
  186: "A 5",
  222: "A# 5",
  13: "B 5",
  81: "C 6",
  87: "C# 6",
  69: "D 6",
  82: "D# 6",
  84: "E 6",
  89: "F 6",
  85: "F# 6",
  73: "G 6",
  79: "G# 6",
  80: "A 6",
  219: "A# 6",
  221: "B 6",
  49: "C 7"
};

var App = React.createClass({
  render: function () {
    return(
      <Organ />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('main'));
});

document.addEventListener("keydown", function(e) {
  var key = Mapping[e.keyCode];
  if (key) {
    KeyListener.pressKey(key);
    console.log(key);
  }
});

document.addEventListener("keyup", function(e) {
  var key = Mapping[e.keyCode];
  if (key) {
    KeyListener.releaseKey(key);
  }
});
