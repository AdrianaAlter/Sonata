var React = require('react');
var ReactDom = require('react-dom');

var SongText = React.createClass({
  render: function () {

    var sections = this.props.text.split(" ");
    var lines = sections.map(function (section) {
      return <p key={Math.random()}>{section}</p>
    });

    return (
      <section className="song-text">{lines}</section>
    )
  }
});

module.exports = SongText;
