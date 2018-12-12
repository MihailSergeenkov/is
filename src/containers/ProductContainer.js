import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPage from '~/src/components/views/Product';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      product && <ProductPage product={product} />
    );
  }
}

const stateToProps = (state) => ({
  product: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

export default connect(stateToProps)(Product);
