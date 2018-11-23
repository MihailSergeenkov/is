import React, { Component } from 'react';
import products from '~/constants/Products';

class BasketPage extends Component {
  getProduct(purchase) {
    return products.find(product => product['id'] == purchase['id'])
  }

  render() {
    const { basket } = this.props.location.state;

    return (
      <ul className="collection">
        {
          basket.map((purchase) => {
            const product = this.getProduct(purchase);
            return (
              <li key={purchase['id']} className="collection-item avatar">
                <img src={product['imageUrl']} alt={product['title']} className="circle" />
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

export default BasketPage;
