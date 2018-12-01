import React, { Component } from 'react';
import Product from '~/src/components/views/Product/Product';
import fetchProducts from '~/src/components/fetchProducts';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: null,
        title: null,
        price: null,
        headImage: null,
        imageUrls: []
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetchProducts(id).then((product) => (
      this.setState({
        product: {
          ...product,
          headImage: product['imageUrls'][0]
        }
      })
    ));
  }

  render() {
    return (
      <Product
        product={this.state.product}
      />
    );
  }
}

export default ProductPage;
