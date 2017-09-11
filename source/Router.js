import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { React } from '@packages';

import { Home, Posts, PostView } from '@scenes';
import { Layout, Post } from '@comps';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path='posts' name='posts' component={Posts}></Route>
      <Route path='postview(/:id)' name='postview' component={PostView}></Route>
    </Route>
  </Router>
);
