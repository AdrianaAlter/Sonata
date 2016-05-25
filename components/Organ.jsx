var React = require('react');
var Key = require('./Key');
var TONES = require('../constants/Tones');


var Organ = React.createClass({

  render: function () {

    var keyNames = Object.keys(TONES);

// "G# 5" --> "G-sharp black 5"
    var keys = keyNames.map(function (keyName, idx) {
      var className = keyName.includes("#") ?  keyName[0] + "-sharp black " + keyName[3] : keyName[0] + " " + keyName[2];
      return <Key key={idx} className={className} noteName={keyName}/>;
    });

    return (
      <div className="keyboard group">
        <h1>Sonata</h1>
        <ul className="octave group">
          {keys}
        </ul>
      </div>
    );

  }

});


module.exports = Organ;
