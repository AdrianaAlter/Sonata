var React = require('react');
var ReactDom = require('react-dom');
var SongMenuTitle = require('./song_menu_title.jsx');
var SongStore = require('../stores/song_store.js');

var SongMenu = React.createClass({

  getInitialState: function () {
    return { selected: "" }
  },

  render: function () {

    if (!this.props.titles) { return <div></div> };
      
    var titles = this.props.titles;
    var self = this;

    var menuLis = titles.map(function (title) {
      return <SongMenuTitle key={titles.indexOf(title)}	title={title} clicked={self.props.clicked} selected={self.props.selected} />
    });

    return (
      <ul className={"song-menu group"}>{menuLis}</ul>
    )
  }

});

module.exports = SongMenu;
