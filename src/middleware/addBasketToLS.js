import store from '~/src/store'
import { saveState } from '~/src/helpers/persistenceHelper';
import * as types from '~/src/constants/actionTypes/BasketActionTypes';

const addBasketToLS = (store) => (next) => (action) => {
  next(action);

  if (action.type == types.ADD_PRODUCT_SUCCESS) {
    saveState(store.getState().basket.entries);
  }
};

export default addBasketToLS;
