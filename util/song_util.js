var SongActions = require('../actions/song_actions.js');
var songs = {
  "Happy Birthday": "ddgdkj ddgd;k dde`kjg qq`k;k",
  "Für Elise": "trtrt`eq; ag;` gl`q gtrtrt`eq; ag;` gq`;",
  "Bach Minuet": "k`ei;uikk k`ei;uikk tttieeeiqeq`q;",
  "Ode to Joy": "gghkkhgdaadggdd gghkkhgdaadgdaa ddgadghgadghgdad, gghkkhgdaadgdaa",
  "Lullaby": "ggkggkgkq`;;k dghddgh dh`;k`q aaq;hkgahk;k aaq;hkgahgda"
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
