import request from 'superagent';
import * as types from '~/src/constants/actionTypes/ProductsActionTypes';
import getProducts from '~/src/helpers/getProducts';

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const receiveProducts = (response) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  response
});

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_FAILURE
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts());

    return getProducts()
      .then((response) => {
        dispatch(receiveProducts(
          response.body.items.map((product) => {
            const item = product.fields;

            return {
              ...item,
              headImage: item['imageUrls'][0]
            };
          }))
        )
      })
      .catch(() => dispatch(errorProduct()));
  };
};
