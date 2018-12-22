import React, { Component } from 'react';
import classNames from 'classnames';

class Text extends Component {
  render() {
    const { name, value, handleChange, label, error } = this.props;

    return (
      <div className="row">
        <div className="input-field col s10">
          <input
            id={name}
            name={name}
            className={classNames('validate', { invalid: error })}
            type="text"
            value={value}
            onChange={handleChange}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      </div>
    );
  }
}

export default Text;
