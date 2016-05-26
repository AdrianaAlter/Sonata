var React = require('react');
var ReactDom = require('react-dom');

var SongMenuTitle = React.createClass({

  render: function () {
    var className = this.props.selected == this.props.title ? "song-title active-title" : "song-title";
    return (<li className={className} text={this.props.text} onClick={this.props.clicked}>{this.props.title}</li>);
  }
  
});

module.exports = SongMenuTitle;
