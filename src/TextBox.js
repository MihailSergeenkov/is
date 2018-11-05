import React, { Component } from 'react';

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

export default TextBox;
