import React from 'react';
import { Redirect } from 'react-router-dom';
import { mainPath, basketPath } from '~/src/helpers/routes';
import BasketPage from '~/src/components/views/Basket';

export default {
  path: basketPath(),
  render: (props) => (
    props.location.state.basket.length == 0 ? (
      <Redirect to={{
        pathname: mainPath(),
        state: { message: 'Корзина пуста, добавьте продукт в корзину!' }
      }} />
    ) : (
      <BasketPage {...props}/>
    )
  )
};
