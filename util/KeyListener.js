var Note = require("./Note.js");
var TONES = require("../constants/Tones.js");
var KeyActions = require("../actions/KeyActions");


var KeyListener = {

  pressKey: function (pressedKey) {
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
