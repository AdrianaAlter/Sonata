var React = require('react');
var ReactDom = require('react-dom');

var SongMenu = require('./song_menu.jsx');

var Song = React.createClass({
  render: function () {
    return (
      <div className="song group">
        <SongMenu />
      
      </div>
    )
  }
});

module.exports = Song;
