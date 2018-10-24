import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Routines from './Routines/Routines';
import CreateRoutine from './CreateRoutine/CreateRoutine';
import CheckRoutine from './CheckRoutine/CheckRoutine';


const Routine = ({ match }) => (
  <Switch>
    <Route
      exact
      path={match.url}
      render={() => <Routines /> }/>
    <Route path={`${match.url}/create`} component={CreateRoutine} />
    <Route path={`${match.url}/:id`} component={CheckRoutine} />
  </Switch>
);

export default Routine;