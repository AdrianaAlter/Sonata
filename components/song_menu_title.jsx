var React = require('react');
var ReactDom = require('react-dom');

var SongMenuTitle = React.createClass({
  render: function () {
    return (<li className="song-title">{this.props.title}</li>);
  }
});

module.exports = SongMenuTitle;
