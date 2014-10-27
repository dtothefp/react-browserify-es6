/** @jsx React.DOM */

var React = require('react');

var DevSidebarComponent = React.createClass({
  render: function() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.iconPath + ')'
    };
    //var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="dev-sidebar-component" style={divStyle}></div>
    );
  }
});

module.exports = DevSidebarComponent;
