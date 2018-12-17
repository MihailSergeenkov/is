import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '~/src/reducers';
import addBasketToLS from '~/src/middleware/addBasketToLS';
import ApiMiddleware from '~/src/middleware/API';
import { loadState } from '~/src/helpers/persistenceHelper';

const store = createStore(
  reducers,
  {
    basket: {
      entries: loadState()
    }
  },
  compose(
    applyMiddleware(thunk, ApiMiddleware, addBasketToLS),
    composeWithDevTools()
  )
);

export default store;
