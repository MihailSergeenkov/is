import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import addBasketToLS from '../middleware/addBasketToLS';
import ApiMiddleware from '../middleware/API';
import { loadState } from '../helpers/persistenceHelper';

const initialState = __SERVER__ ? {} : {
  basket: {
    entries: loadState()
  }
}

const devTools = __SERVER__ ? devToolsEnhancer : composeWithDevTools

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk, ApiMiddleware, addBasketToLS),
    devTools()
  )
);

export default store;
