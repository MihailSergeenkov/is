import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './index.css';
import store from 'store'
import history, { historyCb } from 'helpers/history';
import App from 'components/App';

history.listen(historyCb);
historyCb(window.location);

ReactDOM.hydrate(
  <App history={history} store={store} />,
  document.getElementById('app')
);
