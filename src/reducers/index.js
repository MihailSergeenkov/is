import { combineReducers } from 'redux';
import products from '~/src/reducers/Products';
import product from '~/src/reducers/Product';
import basket from '~/src/reducers/Basket';

export default combineReducers({
  products,
  product,
  basket
});
