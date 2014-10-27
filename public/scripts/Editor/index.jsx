/** @jsx React.DOM */

var $ = require('jquery'),
    React = require('react'),
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
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comments.push(comment);
    this.setState({data: comments}, function() {
      // `setState` accepts a callback. To avoid (improbable) race condition,
      // `we'll send the ajax request right after we optimistically set the new
      // `state.
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {
      data: cage,
      uiEditorShow: false
    };
  },
  componentDidMount: function() {
    // this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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
