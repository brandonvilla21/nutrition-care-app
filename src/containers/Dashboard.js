import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layouts/Dashboard';
import Routine from './Routine/Routine';

const DashboardContent = ({ match }) => {
    return (
        <Layout>
            
            <Route
                exact
                path={match.url}
                render={() => <h5>Dashboard Content</h5>}
            />
            <Route path={`${match.url}/routine`} component={Routine}/>
        </Layout>
    );
}

export default DashboardContent;