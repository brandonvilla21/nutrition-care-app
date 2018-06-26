import React, { Component } from 'react';
import Layout from '../../layouts/Dashboard';
import { Route } from 'react-router-dom';
import Routines from './Routines/Routines';
import CreateRoutine from './CreateRoutine/CreateRoutine';

const Routine = ({ match }) => {

  return (
    <Layout>    
      
      <Route
        exact
        path={match.url}
        render={() => <Routines /> }/>
      <Route path={`${match.url}/create`} component={CreateRoutine} />

    </Layout>
  )
}

export default Routine;