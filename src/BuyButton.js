import React, { Component } from 'react';
import basketContext from '~/basketContext';

class BuyButton extends Component {
  render() {
    const { productId } = this.props;

    return (
      <basketContext.Consumer>
        {
          ({ addProduct }) => (
            <button
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={addProduct({ id: productId })}
            >
              <i className="material-icons">add</i>
            </button>
          )
        }
      </basketContext.Consumer>
    );
  }
}

export default BuyButton;
