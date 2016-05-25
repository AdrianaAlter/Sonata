var React = require('react');
var KeyStore = require('../stores/KeyStore');
var Note = require('../util/Note');
var KeyListener = require('../util/KeyListener');
var TONES = require('../constants/Tones');

var Key = React.createClass({
  getInitialState: function () {
    return { pressed: false };
  },
  componentDidMount: function () {

    this.note = new Note(TONES[this.props.noteName]);
    this.listenerToken = KeyStore.addListener(this.startOrStopNote);
  },

  startOrStopNote: function () {
    if (this.state.pressed === false && KeyStore.includes(this.props.noteName)) {
      this.note.start();
      this.setState({ pressed: true });
    }
    else {
      this.note.stop();
      this.setState({ pressed: false });
    }
  },

  componentWillUnmount: function () {
    this.pressToken.remove();
    this.releaseToken.remove();
  },

  render: function () {
    var className;
    if (!this.state.pressed) { className = this.props.className }
    else if (this.state.pressed && this.props.className.includes("black")) { className = this.props.className + " black-active" }
    else { className = this.props.className + " active"};

    var noteName = this.props.noteName.split(" ")[0];
    return (
      <li className={"key " + className}><h2 className="label">{noteName}</h2></li>
    );
  }
});
module.exports = Key;
