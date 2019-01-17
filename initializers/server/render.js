import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import App from '../../src/components/App';

import routes from '../../src/routes';
import store from '../../src/store'
import { historyCb } from '../../src/helpers/history';

export default (req, res) => {
  return historyCb(store, routes, { pathname: req.url, query: req.query })
    .then(() => {
      const context = {};
      return {
        content: ReactDOMServer.renderToString(<App store={store} location={req.url} context={context} />),
        initialState: store.getState(),
        helmet: Helmet.renderStatic()
      };
    });
};
