/** @jsx React.DOM */

var React = require('react'),
    UiBoxGridComponent = require('./UiBoxGridComponent');

var UiBoxGrid = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(url, index) {
      var picSize = 300 * (index + 1);
      url = url + picSize;
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <UiBoxGridComponent imgUrl={url} key={index}>
        </UiBoxGridComponent>
      );
    });
    return (
      <div className="ui-box-grid lego-grid">
        {commentNodes}
      </div>
    );
  }
});

module.exports = UiBoxGrid;
