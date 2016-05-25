var AppDispatcher = require("../dispatcher/Dispatcher");


var KeyActions = {

  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEY_PRESS",
      noteName: key
    });
  },

  keyReleased: function (key) {
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASE",
      noteName: key
    });
  }

};



module.exports = KeyActions;
