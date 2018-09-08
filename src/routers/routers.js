import React from 'react';
import {Router, Route} from 'react-router-dom';
import RouterComponents from './routerComponents';
import history from './history';

export default () => (
  <Router history={history}>
    <Route component={RouterComponents} />
  </Router>
);
