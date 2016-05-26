var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;
var SongStore = new Store(AppDispatcher);

var _songs = {
};

SongStore.populate = function (songs) {
  _songs = {};
  var titles = Object.keys(songs);
  for (var i = 0; i < titles.length; i++) {
    _songs[titles[i]] = songs[titles[i]];
  }
};

SongStore.all = function () {
  return _songs;
};

SongStore.titles = function () {
  return Object.keys(_songs);
};

SongStore.lookUp = function (title) {
  return _songs[title];
};

SongStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ALL_SONGS":
      SongStore.populate(payload.songs);
      SongStore.__emitChange();
      break;
    case "SINGLE_SONG":
      SongStore.lookUp(payload.title);
      SongStore.__emitChange();
      break;
  }
};


module.exports = SongStore;
