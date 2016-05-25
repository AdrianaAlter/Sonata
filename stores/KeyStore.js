var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;
var ACTIONS = require('../constants/ActionTypes');
var KeyStore = new Store(AppDispatcher);

var _keys = [];

KeyStore.includes = function (key) {
  return _keys.includes(key);
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "KEY_PRESS":
        if (!_keys.includes(payload.noteName)) {
        _keys.push(payload.noteName);
        KeyStore.__emitChange();
      }
      break;
    case "KEY_RELEASE":
      var keyIdx = _keys.indexOf(payload.noteName);
      if (keyIdx !== -1) {
        _keys.splice(keyIdx, 1);
        KeyStore.__emitChange();
      }
      break;
    default:

  }
};

module.exports = KeyStore;
