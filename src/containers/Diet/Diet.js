import React from 'react';
import { Route } from 'react-router-dom';
import Diets from './Diets/Diets';
import CreateDiet from './CreateDiet/CreateDiet';

const Diet = ({ match }) => {

  return (
    <div>
      <Route exact path={match.url} component={Diets}/>
      <Route exact path={`${match.url}/create`} component={CreateDiet}/>
    </div>
  );
};

export default Diet;