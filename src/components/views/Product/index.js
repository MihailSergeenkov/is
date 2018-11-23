import React, { Component } from 'react';
import products from '~/constants/Products';

class ProductPage extends Component {
  getProduct(id) {
    return products.find(product => product['id'] == id)
  }

  render() {
    const { id } = this.props.match.params;
    const product = this.getProduct(id);

    return (
      <div>
        <img src={product['imageUrl']} alt={product['title']} style={{ marginTop: '20px' }} width="100" heigth="100"/>
        <p>ID продукта: {id}</p>
        <p>Название продукта: {product['title']}</p>
        <p>Стоимость продукта: {product['price']} руб.</p>
      </div>
    );
  }
}

export default ProductPage;
