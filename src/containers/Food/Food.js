import React from 'react';
import { Route } from 'react-router-dom';
import Foods from './Foods/Foods';
import CreateFood from './CreateFood/CreateFood';

const Food = ({ match }) => {
    
    return (
        <div>
            <Route
                exact
                path={match.url}
                render={() => <Foods />}
            />
            <Route
                path={`${match.url}/create`}
                component={CreateFood}
            />
        </div>
    );
}

export default Food;