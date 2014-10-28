/** @jsx React.DOM */

var React = require('react'),
  _ = require('lodash'),
  ReactAddons = require('react/addons').addons,
  FontDropdownComponent = require('./FontDropdownComponent');
  
class UiEditorFontSelectClass {
  getInitialState() {
    var fonts = [
        'Arial',
        'Georgia',
        'Helvetica',
        'Sans Serif'
        ];
    return {
      fonts: fonts,
      activeFont: fonts[3],
      activeFontSize: 12,
      showDropdown: false
    };
  }
  handleButtonClick(e) {
    e.preventDefault();
    this.setState(_.extend({}, this.state, {showDropdown: !this.state.showDropdown}));
  }
  handleSetFont(uid) {
    this.setState(_.extend({}, this.state, {
      activeFont: uid,
      showDropdown: false
    }));
  }
  handleFontSizeChange(e) {
    this.setState(_.extend({}, this.state, {activeFontSize: e.target.value}));
  }
  render() {
    var cx = ReactAddons.classSet;
    var dropDownClassNames = cx({
      'lego-dropdown': true,
      'show-dropdown': this.state.showDropdown
    });
    var dropDownButtons = this.state.fonts.map((font,index) => {
      if(this.state.currentFont !== font) {
        return (
          <FontDropdownComponent 
            key={font + index} 
            onSelect={this.handleSetFont}
            uid={font}
            active={this.state.activeFont === font}
          />
        );
      }
    });
    return (
      <div className="flex">
        <div className="lego-dropdown-group flex-1">
          <button className="lego-button" onClick={this.handleButtonClick}>
          {this.state.activeFont} <span className="lego-arrow-inline--down"></span>
          </button>
          <ul className={dropDownClassNames}>
            <li className="lego-dropdown__item">
              {dropDownButtons}
            </li>
          </ul>
        </div>
        <input className="lego-text-input width-50 push--left" value={this.state.activeFontSize} onChange={this.handleFontSizeChange}/>
      </div>
    );
  }
}

module.exports = React.createClass(UiEditorFontSelectClass.prototype);
