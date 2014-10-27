/** @jsx React.DOM */

var React = require('react');

var UiBoxGridComponent = React.createClass({
  render: function() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.imgUrl + ')'
    };

    return (
      <div className="ui-box-grid-component lego-grid__cell width-1-3">
        <div style={divStyle}></div>
      </div>
    );
  }
});

module.exports = UiBoxGridComponent;
