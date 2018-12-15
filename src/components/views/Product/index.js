import React, { Component } from 'react';
import Gallery from '~/src/components/views/Product/Gallery';

class ProductPage extends Component {
  render() {
    const { product } = this.props;

    if (product) {
      return (
        <div>
          <Gallery product={product} />
          <p>ID продукта: {product['id']}</p>
          <p>Название продукта: {product['title']}</p>
          <p>Стоимость продукта: {product['price']} руб.</p>
        </div>
      );
    } else {
      return (
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductPage;
