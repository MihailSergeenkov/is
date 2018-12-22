import React, { Component } from 'react';

import classNames from 'classnames';

class RenderField extends Component {
  render() {
    const { input, label, type, meta: { touched, error, warning } } = this.props;

    return (
      <div className="row">
        <div className="input-field col s10">
          <input
            {...input}
            className={classNames('validate', { invalid: touched && error })}
            type={type}
          />
          <label>{label}</label>
          {touched && error && <span class="helper-text" data-error={error}></span>}
        </div>
      </div>
    );
  }
}

export default RenderField;
