import { assign } from 'lodash/object';
import * as types from '~/src/constants/actionTypes/BasketActionTypes';

const initialState = {
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT_SUCCESS:
      return assign({}, state, { entries: [...state.entries, action.response] });
    case types.CLEAR_BASKET:
      return assign({}, state, { entries: [] });
    default:
      return state;
  }
};
