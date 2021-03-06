/** @jsx React.DOM */

var React = require('react'),
  ReactAddons = require('react/addons').addons;

class TextAlignComponentClass {
  handleClick(e) {
    e.preventDefault();
    this.props.onSelect(this.props.uid);
  }
  render() {
    var cx = ReactAddons.classSet;
    var bgImg = { backgroundImage: 'url(/img/' + this.props.uid + '.svg)' };
    var classNames = cx({
      'lego-button': true,
      'lego-button--brand': this.props.active
    });
    return (
      <button
        className={classNames}
        style={bgImg}
        onClick={this.handleClick}
      ></button>
    );
  }
}

module.exports = React.createClass(TextAlignComponentClass.prototype);
