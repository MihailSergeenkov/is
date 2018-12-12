import { assign } from 'lodash/object';
import * as types from '~/src/constants/actionTypes/ProductsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_PRODUCTS_FAILURE:
      return assign({}, state, { error: true });
    case types.FETCH_PRODUCTS_SUCCESS:
      return assign({}, state, { entries: action.response });
    default:
      return state;
  }
};
