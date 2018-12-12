import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from '~/src/components/views/Nav';
import { matchPath } from 'react-router';
import { parse } from 'qs';
import routes from '~/src/routes';
import store from '~/src/store'
import prepareData from '~/src/helpers/prepareData';
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

function historyCb(location, action = 'PUSH') {
  const state = { params: {}, query: {}, routes: [] };

  routes.some((route) => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, state);
};

history.listen(historyCb);
historyCb(window.location);

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Nav />
            <Switch>
              {routes.map((route, key) => RouteWithSubroutes(route, key))}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
