import React from 'react';
import { Route } from 'react-router-dom';
import Diets from './Diets/Diets';

const Diet = ({ match }) => {

  return (
    <div>
      <Route
        exact
        path={match.url}
        component={Diets}/>
    </div>
  );
};

export default Diet;