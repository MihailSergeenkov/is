import React, { Component } from 'react';
import basketContext from '~/basketContext';

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
      addProduct({ id: productId, number: 1 })();
      e.stopPropagation();
      return false;
    };
  }

  render() {
    return (
      <basketContext.Consumer>
        {
          ({ basket, addProduct }) => (
            <button
              className="btn-large waves-effect waves-light"
              onDragEnter={this.dragEnter}
              onDrop={this.drop(addProduct)}
              onDragOver={this.dragOver}
            >
              Корзина {basket.reduce((sum, products) => sum + products.number, 0)}
            </button>
          )
        }
      </basketContext.Consumer>
    );
  }
}

export default BasketButton;
