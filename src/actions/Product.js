import * as types from '../constants/actionTypes/ProductActionTypes';
import { API_CALL } from '../middleware/API';

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
