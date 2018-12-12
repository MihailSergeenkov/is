import request from 'superagent';
import * as types from '~/src/constants/actionTypes/ProductActionTypes';
import getProducts from '~/src/helpers/getProducts';

const requestProduct = (id) => ({
  type: types.FETCH_PRODUCT_REQUEST,
  id
});

const receiveProduct = (response) => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  response
});

const errorProduct = () => ({
  type: types.FETCH_PRODUCT_FAILURE
});

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch(requestProduct(id));

    return getProducts(id)
      .then((response) => {
        const product = response.body.items[0].fields
        dispatch(receiveProduct({
          ...product,
          headImage: product['imageUrls'][0]
        }))
      })
      .catch(() => dispatch(errorProduct()));
  };
};
