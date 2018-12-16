import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '~/src/reducers';
import addBasketToLS from '~/src/middleware/addBasketToLS';
import ApiMiddleware from '~/src/middleware/API';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, ApiMiddleware, addBasketToLS),
    composeWithDevTools()
  )
);

export default store;
