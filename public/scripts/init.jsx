/** @jsx React.DOM */

var Editor = require('./components/Editor');
var React = require('react');


React.renderComponent(
  <Editor />,
  document.getElementById('content')
);
