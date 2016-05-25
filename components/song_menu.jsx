var React = require('react');
var ReactDom = require('react-dom');
var SongMenuTitle = require('./song_menu_title.jsx');

var songs = {
  "Song 1": "]piipiuip]p",
  "Song 2": "song2text",
  "Song 3": "3txt",
  "Song 4": "4txt",
  "Song 5": "5txt"
};

var SongMenu = React.createClass({

  render: function () {
    var titles = Object.keys(songs);
    var menuLis = titles.map(function (title) {
      return <SongMenuTitle key={titles.indexOf(title)}	title={title} text={songs[title]} />
    });

    return (
      <ul className="song-menu group">{menuLis}</ul>
    )
  }

});

module.exports = SongMenu;
