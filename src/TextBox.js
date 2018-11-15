import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;

    return (
      <span>{text}</span>
    );
  }
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextBox;
