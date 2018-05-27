import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {LoginScreen, DashBoardScreen} from '../Navigations';

const RootRouter = () => {
  return(
    <Router>
      <div>
        <Route  path='/Dashboard' component={DashBoardScreen} />
        <Route exact path='/' component={LoginScreen} />
      </div>
    </Router>
  )
}

export default RootRouter;
