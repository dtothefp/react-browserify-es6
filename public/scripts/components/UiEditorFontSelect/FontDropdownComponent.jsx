/** @jsx React.DOM */

var React = require('react'),
  ReactAddons = require('react/addons').addons;

class FontDropdwonComponentClass {
  handleClick(e) {
    e.preventDefault();
    this.props.onSelect(this.props.uid);
  }
  render() {
    var cx = ReactAddons.classSet;
    var classNames = cx({
      'lego-dropdown__block-link': true,
      'hide-dropdown-item': this.props.active
    });
    return (
      <a 
        href="#" 
        className={classNames}
        onClick={this.handleClick}
      >{this.props.uid}</a>
    );
  }
}

module.exports = React.createClass(FontDropdwonComponentClass.prototype);
