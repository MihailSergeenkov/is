import React, { Component } from 'react';
import Helmet from 'react-helmet';
import OrderForm from './OrderForm';

class BasketPage extends Component {
  getProduct(purchase) {
    return this.props.products.find(product => product['id'] == purchase['id'])
  }

  render() {
    const { basket } = this.props;

    return (
      <div>
        <Helmet>
          <title>Корзина</title>
        </Helmet>
        <h5>Ваш заказ:</h5>
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
        <OrderForm {...this.props}/>
      </div>
    );
  }
}

export default BasketPage;
