/** @jsx React.DOM */

var React = require('react'),
    DevSidebarComponent = require('./DevSidebarComponent');

var DevSidebar = React.createClass({
  render: function() {
    var navIcons = this.props.data.map(function(icon, index) {
      return (
        <li className="nav-icon__item">
          <DevSidebarComponent iconPath={'/img/' + icon + '.svg'} key={index}></DevSidebarComponent>
        </li>
      );
    });
    return (
      <div className="dev-sidebar lego-pane width-50 border--right hard visible">
        <ul className="nav-icons">
          {navIcons}
        </ul>
      </div>
    );
  }
});

module.exports = DevSidebar;
