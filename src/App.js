import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from './components/Dashboard/Dashboard';
import { hot } from 'react-hot-loader';
import { DetailsPage } from './components/Movie/Details/Details';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/details/:movieId' component={DetailsPage} />
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
export default hot(module)(App);
