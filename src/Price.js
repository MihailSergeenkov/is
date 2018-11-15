import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { price } = this.props;

    return (
      <span>{price} руб.</span>
    );
  }
}

Price.propTypes = {
  price: PropTypes.number.isRequired
};

export default Price;
