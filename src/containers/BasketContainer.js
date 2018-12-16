import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadState } from '~/src/helpers/persistenceHelper';

class Basket extends Component {
  getProduct(purchase) {
    return this.props.products.find(product => product['id'] == purchase['id'])
  }

  render() {
    const basket = loadState();

    return (
      <ul className="collection">
        {
          basket.map((purchase) => {
            const product = this.getProduct(purchase);
            return (
              <li key={purchase['id']} className="collection-item avatar">
                <img src={product['headImage']} alt={product['title']} className="circle" />
                <span className="title">{product['title']}</span>
                <p>{purchase['quantity']}</p>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

const stateToProps = (state) => ({
  products: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
});

export default connect(stateToProps)(Basket);
