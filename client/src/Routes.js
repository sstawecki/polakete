// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingContainer from './containers/LandingContainer';
import CallContainer from './containers/CallContainer';
import NotFound from './components/NotFound';

const Routes = () => {
  return(
    <Switch>
      <Route path={'/'} exact={true} component={LandingContainer}/>
      <Route path={'/call'} exact={true} component={CallContainer}/>
      <Route path={'*'} component={NotFound}/>
    </Switch>
  );
};

export default Routes;