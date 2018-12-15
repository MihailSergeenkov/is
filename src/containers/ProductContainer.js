import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPage from '~/src/components/views/Product';

const stateToProps = (state) => ({
  product: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

export default connect(stateToProps)(ProductPage);
