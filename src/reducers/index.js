import { combineReducers } from 'redux';
import products from '~/src/reducers/Products';
import product from '~/src/reducers/Product';
import basket from '~/src/reducers/Basket';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  products,
  product,
  basket,
  form: formReducer
});
