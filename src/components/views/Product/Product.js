import React, { Component } from 'react';
import Gallery from '~/src/components/views/Product/Gallery';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <Gallery product={product} />
        <p>ID продукта: {product['id']}</p>
        <p>Название продукта: {product['title']}</p>
        <p>Стоимость продукта: {product['price']} руб.</p>
      </div>
    );
  }
}

export default Product;
