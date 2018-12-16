import * as types from '~/src/constants/actionTypes/ProductActionTypes';
import { API_CALL } from '~/src/middleware/API';

export function fetchProduct(id) {
  return {
    [API_CALL]: {
      id: id,
      types: [
        types.FETCH_PRODUCT_REQUEST,
        types.FETCH_PRODUCT_SUCCESS,
        types.FETCH_PRODUCT_FAILURE
      ]
    }
  }
};
