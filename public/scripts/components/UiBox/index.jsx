/** @jsx React.DOM */

var React = require('react'),
    UiBoxGrid = require('../UiBoxGrid');

var UiBox = React.createClass({
  render: function() {
    return (
      <div className="ui-box" onClick={this.props.clickEvent}>
        <div className="bg-placeholder">
          <UiBoxGrid data={this.props.data} />
        </div>
      </div>
    );
  }
});

module.exports = UiBox;
