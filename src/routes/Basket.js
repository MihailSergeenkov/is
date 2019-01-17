import React from 'react';
import { Redirect } from 'react-router-dom';
import { mainPath, basketPath } from '../helpers/routes';
import BasketContainer from '../containers/BasketContainer';
import { fetchProducts } from '../actions/Products';

export default {
  path: basketPath(),
  render: (props) => (
    props.location.state.basket.length == 0 ? (
      <Redirect to={{
        pathname: mainPath(),
        state: { message: 'Корзина пуста, добавьте продукт в корзину!' }
      }} />
    ) : (
      <BasketContainer />
    )
  ),
  prepareData: (store) => {
    store.dispatch(fetchProducts());
  }
};
