var SongActions = require('../actions/song_actions.js');
var songs = {
  "Song 1": "]piipiuip]p puee33]pi ]piuipiuip]p p33ppute",
  "Song 2": "gmdmadghdk gmdmadghdk ;qqqeq~;qqqeq",
  "Song 3": "kt kttkttytrti yteeweteewetq",
  "Song 4": "qeq;;;k;'; 'kq; hdka",
  "Song 5": "sjl;jlgj sjl;ljlgj s;'w';'j; jl;ljha*s/*"
};

var SongUtil = {

  fetchAllSongs: function () {
    SongActions.allSongs(songs);
  },

  fetchSingleSong: function (title) {
    SongActions.singleSong(title);
  }


};




module.exports = SongUtil;

// kkeq';k;'; 'kgkkj~g
