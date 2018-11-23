import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Nav from '~/src/components/views/Nav';
import routes from '~/src/routes';

import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Nav />
          <Switch>
            {routes.map((route, key) => RouteWithSubroutes(route, key))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
