import React from 'react';
import { Route } from 'react-router-dom';
import Exercises from './Exercises/Exercises';
// import CreateBodyArea from './CreateBodyArea/CreateBodyArea';

const Exercise = ({ match }) => {
    return (
        <div>
            <Route exact path={match.url} component={Exercises}/>
            {/* <Route
                path={`${match.url}/create`}
                component={CreateExercise}
            /> */}
        </div>
    );
};

export default Exercise;