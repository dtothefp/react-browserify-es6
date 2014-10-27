/** @jsx React.DOM */

var React = require('react'),
    UiEditorGrid = require('../UiEditorGrid'),
    UiEditorFontSelect = require('../UiEditorFontSelect');

var UiEditor = React.createClass({
  render: function() {
    var className = "ui-editor lego-pane lego-data-sidebar lego-pane--flex";
    if(this.props.showEditor) {
      className += " show-editor";
    }
    return (
      <div className={className}>
        <form>
          <fieldset>
            <div className="lego-form__header">
              <div className="lego-form__title">UITextarea</div>
            </div>
            <ol className="lego-form-fields">
              <li className="lego-form-field__item">
                <label className="lego-label lego-label">Font</label>
                <div className="flex">
                  <UiEditorFontSelect />
                  <UiEditorGrid data={this.props.data} />
                </div>
              </li>
            </ol>
          </fieldset>
        </form>
      </div>
    );
  }
});

module.exports = UiEditor;
