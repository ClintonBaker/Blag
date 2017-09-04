import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { React } from '@packages';

import { Home } from '@scenes';
import { Layout, Post } from '@comps';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Post} />
    </Route>
  </Router>
);
