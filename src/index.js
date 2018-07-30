import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Landing from './components/Landing';
import './index.css';

const appHistory = useRouterHistory(createBrowserHistory)({ queryKey: false });

const routes = (
  <Router history={appHistory}>
    <Route path="/" component={Landing} />
  </Router>
);

render(routes, document.getElementById('root'));