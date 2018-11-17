import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '~/src/ProductCard';
import BasketButton from '~/src/BasketButton';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <BasketButton />
        <div className="row">
          {
            products.map((product) => (
              <div className="col s4" key={product['id']}>
                <ProductCard product={product} />
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

export default Catalog;
