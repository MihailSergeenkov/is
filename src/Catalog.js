import React, { Component } from 'react';
import ProductCard from '~/src/ProductCard';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {
          products.map((product) => (
            <div key={product['id']}>
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Catalog;
