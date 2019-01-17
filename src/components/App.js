import React from 'react';
import { Router, StaticRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './views/Nav';
import routes from 'routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const AppRouter = ({ history, children, location, context }) => {
  if (__CLIENT__) {
    return <Router history={history} location={location}>{children}</Router>
  }
  if (__SERVER__) {
    return <StaticRouter context={context} location={location}>{children}</StaticRouter>
  }
};

const App = ({ history, store, location, context }) => (
  <Provider store={store}>
    <AppRouter history={history} location={location} context={context}>
      <div>
        <Nav />
        <Switch>
          {routes.map((route, key) => RouteWithSubroutes(route, key))}
        </Switch>
      </div>
    </AppRouter>
  </Provider>
)

export default App;
