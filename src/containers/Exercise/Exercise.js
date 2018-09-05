import React from 'react';
import { Route } from 'react-router-dom';
// import BodyAreas from './BodyAreas/BodyAreas';
// import CreateBodyArea from './CreateBodyArea/CreateBodyArea';

const Exercise = ({ match }) => {
    return (
        <div>
            <Route
                exact
                path={match.url}
                render={() => <p>This should render something</p>}
            />
            {/* <Route
                path={`${match.url}/create`}
                component={CreateExercise}
            /> */}
        </div>
    );
};

export default Exercise;