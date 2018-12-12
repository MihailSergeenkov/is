import { assign } from 'lodash/object';
import * as types from '~/src/constants/actionTypes/ProductActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_PRODUCT_FAILURE:
      return assign({}, state, { error: true });
    case types.FETCH_PRODUCT_SUCCESS:
      return assign({}, state, { entry: action.response });
    default:
      return state;
  }
};
