import * as types from '~/src/constants/actionTypes/ProductsActionTypes';
import { API_CALL } from '~/src/middleware/API';

export function fetchProducts() {
  return {
    [API_CALL]: {
      types: [
        types.FETCH_PRODUCTS_REQUEST,
        types.FETCH_PRODUCTS_SUCCESS,
        types.FETCH_PRODUCTS_FAILURE
      ]
    }
  }
};
