import React, { Component } from 'react';
import PropTypes from 'prop-types';
import basketContext from '~/basketContext';

class BuyButton extends Component {
  render() {
    const { productId, productNumber } = this.props;

    return (
      <basketContext.Consumer>
        {
          ({ addProduct }) => (
            <button
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={addProduct({ id: productId, number: productNumber })}
            >
              <i className="material-icons">add</i>
            </button>
          )
        }
      </basketContext.Consumer>
    );
  }
}

BuyButton.propTypes = {
  productId: PropTypes.string.isRequired,
  productNumber: PropTypes.number
};

BuyButton.defaultProps = {
  productNumber: 1
};


export default BuyButton;
