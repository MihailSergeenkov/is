import React, { Component } from 'react';
import basketContext from '~/basketContext';

class BasketButton extends Component {
  constructor(props) {
    super(props);

    this.state = { products: 0 };
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

  drop(e) {
    this.setState((prevState) => (
      {
        products: ++prevState.products
      }
    ))
    e.stopPropagation();
    return false;
  }

  render() {
    return (
      <basketContext.Consumer>
        {
          ({ basket }) => (
            <button
              className="btn-large waves-effect waves-light"
              onDragEnter={this.dragEnter}
              onDrop={this.drop}
              onDragOver={this.dragOver}
            >
              Корзина {basket.reduce((sum, products) => sum + products.number, this.state.products)}
            </button>
          )
        }
      </basketContext.Consumer>
    );
  }
}

export default BasketButton;
