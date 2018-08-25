import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layouts/Dashboard';
import Routine from './Routine/Routine';
import Food from './Food/Food';
import BodyArea from './BodyArea/BodyArea';
import ProtectedRoute from '../components/ProtectedRoute';
import { ADMINISTRATOR, CUSTOMER } from '../shared/user-roles';

const DashboardContent = ({ match }) => {
    return (
        <Layout>
            
            <Route
                exact
                path={match.url}
                render={() => <h5>Dashboard Content</h5>}
            />
            <ProtectedRoute path={`${match.url}/routine`} type={[CUSTOMER]} component={Routine}/>
            <ProtectedRoute path={`${match.url}/food`} type={[ADMINISTRATOR]} component={Food}/>
            <ProtectedRoute path={`${match.url}/body-area`} type={[ADMINISTRATOR]} component={BodyArea}/>
        </Layout>
    );
};

export default DashboardContent;