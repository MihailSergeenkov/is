import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasketButton extends Component {
  render() {
    const { products } = this.props;

    return (
      <button className="btn-large waves-effect waves-light">
        Корзина {products.length}
      </button>
    );
  }
}

BasketButton.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  )
};

export default BasketButton;
