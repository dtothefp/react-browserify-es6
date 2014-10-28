/** @jsx React.DOM */

var React = require('react'),
    UiEditor = require('../UiEditor'),
    DevSidebar = require('../DevSidebar'),
    UiBox = require('../UiBox'),
    UiEditor = require('../UiEditor'),
    _ = require('lodash');

var cage = [
  'http://www.placecage.com/200/',
  'http://www.placecage.com/200/',
  'http://www.placecage.com/200/'
];

var icons = {
  devIcons: [
    'variation-settings',
    'live-variables',
    'code-blocks'
  ],
  editorIcons: [
    'left-align',
    'center-align',
    'right-align'
  ]
};

var Editor = React.createClass({
  getInitialState: function() {
    return {
      data: cage,
      uiEditorShow: false
    };
  },
  onUiEditorClick: function() {
    this.setState(_.extend({}, this.state, {uiEditorShow: !this.state.uiEditorShow}));
  },
  render: function() {
    return (
      <div className="editor flex">
        <DevSidebar data={icons.devIcons} />
        <div className="lego-pane lego-pane--flex-1 lego-pane-group lego-pane-group--column ui-box-container">
          <div className="mib-content-wrapper">
            <UiBox data={cage} clickEvent={this.onUiEditorClick} />
          </div>
        </div>
        <UiEditor data={icons.editorIcons} showEditor={this.state.uiEditorShow}/>
      </div>
    );
  }
});

module.exports = Editor;
