import React from 'react';
import { Route } from 'react-router-dom';
import Diets from './Diets/Diets';
import CreateDiet from './CreateDiet/CreateDiet';
import EditDiet from './EditDiet/EditDiet';


const Diet = ({ match }) => {

  return (
    <div>
      <Route exact path={match.url} component={Diets}/>
      <Route exact path={`${match.url}/create`} component={CreateDiet}/>
      <Route exact path={`${match.url}/edit/:id`} component={EditDiet}/>
    </div>
  );
};

export default Diet;