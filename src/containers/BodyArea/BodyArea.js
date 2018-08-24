import React from 'react';
import { Route } from 'react-router-dom';
import BodyAreas from './BodyAreas/BodyAreas';
import CreateBodyArea from './CreateBodyArea/CreateBodyArea';

const BodyArea = ({ match }) => {
    return (
        <div>
            <Route
                exact
                path={match.url}
                render={() => <BodyAreas />}
            />
            <Route
                path={`${match.url}/create`}
                component={CreateBodyArea}
            />
        </div>
    );
}

export default BodyArea;