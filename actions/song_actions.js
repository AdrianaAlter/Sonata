var AppDispatcher = require('../dispatcher/Dispatcher.js');

var SongActions = {

  allSongs: function (songs) {
    AppDispatcher.dispatch({
      actionType: "ALL_SONGS",
      songs: songs
    });
  },

  singleSong: function (title) {
    AppDispatcher.dispatch({
      actionType: "SINGLE_SONG",
      title: title
    });
  }

};

module.exports = SongActions;
