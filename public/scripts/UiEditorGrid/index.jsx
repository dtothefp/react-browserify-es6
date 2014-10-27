/** @jsx React.DOM */

var React = require('react')
  TextAlignComponent = require('./TextAlignComponent')

class UiEditorGridClass {
  getInitialState() {
    return {
      activeMenuItemUid: false
    }
  }
  handleTextAlignClick(uid) {
    this.setState({activeMenuItemUid: uid});
  }
  render() {
    var textAlignIcons = this.props.data.map((icon, index) => {
      return (
        <TextAlignComponent
          key={icon + '-' + index}
          onSelect={this.handleTextAlignClick}
          uid={icon}
          active={this.state.activeMenuItemUid === icon}
        ></TextAlignComponent>
      );
    });
    return (
      <div className="text-align-buttons lego-button-group push--left">
        {textAlignIcons}
      </div>
    );
  }
}

module.exports = React.createClass(UiEditorGridClass.prototype);
