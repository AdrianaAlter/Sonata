var Note = require("./Note.js");
var TONES = require("../constants/Tones.js");
var KeyActions = require("../actions/KeyActions");

// var Mapping = {
//   65: "C5",
//   87: "C#",
//   83: "D",
//   69: "D#",
//   68: "E",
//   70: "F",
//   84: "F#",
//   71: "G",
//   89: "G#",
//   72: "A",
//   85: "A#",
//   74: "B",
//   75: "C6"
// };

var KeyListener = {

  pressKey: function (pressedKey) {
    // debugger
    KeyActions.keyPressed(pressedKey);
  },

  releaseKey: function (releasedKey) {
    KeyActions.keyReleased(releasedKey);
  }
};

module.exports = KeyListener;

// $(document).on("keydown", function(e) {
//   var key = Mapping[e.keyCode];
//   if (key === pressedKey) {
//     KeyActions.keyPressed(key);
//   }
// });
