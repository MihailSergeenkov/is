import React, { Component } from 'react';
import classNames from 'classnames';

class TextArea extends Component {
  render() {
    const { name, value, handleChange, label, error } = this.props;

    return (
      <div className="row">
        <div className="input-field col s10">
          <textarea
            id={name}
            name={name}
            className={classNames('materialize-textarea', { invalid: error })}
            value={value}
            onChange={handleChange}
          >
          </textarea>
          <label htmlFor={name}>{label}</label>
        </div>
      </div>
    );
  }
}

export default TextArea;
