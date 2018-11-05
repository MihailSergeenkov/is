import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, width, height, alt } = this.props;

    return (
      <img src={src} width={width} height={height} alt={alt} />
    );
  }
}

export default Image;
