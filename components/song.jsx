var React = require('react');
var ReactDom = require('react-dom');
var SongMenu = require('./song_menu.jsx');
var SongText = require('./song_text.jsx');
var SongUtil = require('../util/song_util.js');
var SongStore = require('../stores/song_store.js')

var Song = React.createClass({
  getInitialState: function () {
      return { titles: [], selected: "", text: "" }
  },

  componentDidMount: function () {
    var songs = SongUtil.fetchAllSongs();
    this.listener = SongStore.addListener(this.getSongs);
    this.setState({ titles: SongStore.titles() })
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  clicked: function (e) {
    var title = e.currentTarget.textContent;
    this.setState({ selected: title });
    this.setState({ text: SongStore.lookUp(title) });
  },

  getSongs: function () {
    this.setState({ titles: SongStore.titles() });
  },

  render: function () {

    return (
      <div className="song group">
        <SongMenu titles={this.state.titles} clicked={this.clicked} selected={this.state.selected}/>
        <SongText text={this.state.text} />
      </div>
    )
  }
});

module.exports = Song;
