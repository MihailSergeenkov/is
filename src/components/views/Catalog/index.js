import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import ProductCard from './ProductCard';
import BasketButton from './BasketButton';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products, basket, addProduct, location: { state } } = this.props;
    const message = state && state.message;

    return (
      <div className="container">
        <Helmet>
          <title>Продукты</title>
        </Helmet>
        { message && <div>{message}</div> }

        <BasketButton basket={basket} addProduct={addProduct} />
        <div className="row">
          {
            products.map((product) => (
              <div className="col s4" key={product['id']}>
                <ProductCard product={product} addProduct={addProduct} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes)
  )
};

export default withRouter(Catalog);
