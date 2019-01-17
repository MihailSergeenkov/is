import store from '../store'
import { saveState } from '../helpers/persistenceHelper';
import * as types from '../constants/actionTypes/BasketActionTypes';

const addBasketToLS = (store) => (next) => (action) => {
  next(action);

  if (action.type == types.ADD_PRODUCT_SUCCESS) {
    saveState(store.getState().basket.entries);
  }
};

export default addBasketToLS;
