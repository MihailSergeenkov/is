import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

Image.defaultProps = {
  width: '200',
  height: '200'
};

export default Image;
