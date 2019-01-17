import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';
import basket from './Basket';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  products,
  product,
  basket,
  form: formReducer
});
