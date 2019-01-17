import * as types from '../constants/actionTypes/BasketActionTypes';

const addProductToBasket = (response) => ({
  type: types.ADD_PRODUCT_SUCCESS,
  response
});

export function addProduct(product) {
  return (dispatch) => (dispatch(addProductToBasket(product)));
};
