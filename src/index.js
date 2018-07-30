import React from 'react';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/App';
import Landing from './components/Landing';
import './index.css';
import store from './stores';

const appHistory = useRouterHistory(createBrowserHistory)({ queryKey: false });

const routes = (
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
      </Route>
    </Router>
  </Provider>
);

render(routes, document.getElementById('root'));