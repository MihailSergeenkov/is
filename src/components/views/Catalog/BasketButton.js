import React, { Component } from 'react';
import basketContext from '~/basketContext';
import Link from '~/src/components/Link';
import { mainPath, basketPath } from '~/src/helpers/routes';

class BasketButton extends Component {
  constructor(props) {
    super(props);

    this.dragEnter = this.dragEnter.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.drop = this.drop.bind(this);
  }

  dragEnter(e) {
    e.preventDefault();
    return true;
  }

  dragOver(e) {
    e.preventDefault();
  }

  drop(addProduct) {
    return (e) => {
      let productId = e.dataTransfer.getData('product');
      addProduct({ id: productId, quantity: 1 });
      e.stopPropagation();
      return false;
    };
  }

  render() {
    const { basket, addProduct } = this.props;

    return (
      <Link
        to={{
          pathname: basketPath(),
          state: { basket }
        }}>
        <button
          className="btn-large waves-effect waves-light"
          onDragEnter={this.dragEnter}
          onDrop={this.drop(addProduct)}
          onDragOver={this.dragOver}
        >
          Корзина {basket.reduce((sum, products) => sum + products.quantity, 0)}
        </button>
      </Link>
    );
  }
}

export default BasketButton;
