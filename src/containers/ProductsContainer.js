import React, { Component } from 'react';
import { connect } from 'react-redux';
import Catalog from '../components/views/Catalog';
import { addProduct } from '../actions/Basket';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Catalog {...this.props} />;
  }
}

const stateToProps = (state) => ({
  products: state.products.entries,
  basket: state.basket.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
});

const actionsToProps = (dispatch, { product }) => ({
  addProduct: (product) => dispatch(addProduct(product))
})

export default connect(stateToProps, actionsToProps)(Products);
