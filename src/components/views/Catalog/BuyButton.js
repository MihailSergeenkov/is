import React, { Component } from 'react';
import PropTypes from 'prop-types';
import basketContext from '~/basketContext';

class BuyButton extends Component {
  render() {
    const { productId, productQuantity, addProduct } = this.props;

    return (
      <button
        className="btn-floating halfway-fab waves-effect waves-light red"
        onClick={() => addProduct({ id: productId, quantity: productQuantity })}
      >
        <i className="material-icons">add</i>
      </button>
    );
  }
}

BuyButton.propTypes = {
  productId: PropTypes.string.isRequired,
  productQuantity: PropTypes.number
};

BuyButton.defaultProps = {
  productQuantity: 1
};

export default BuyButton;
