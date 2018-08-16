import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layouts/Dashboard';
import Routine from './Routine/Routine';
import DietPage from './Diet/DietPage';
import Food from './Food/Food';

const DashboardContent = ({ match }) => {
    return (
        <Layout>
            
            <Route
                exact
                path={match.url}
                render={() => <h5>Dashboard Content</h5>}
            />
            <Route path={`${match.url}/routine`} component={Routine}/>
            <Route path={`${match.url}/diet`} component={DietPage}/>
            <Route path={`${match.url}/food`} component={Food}/>
        </Layout>
    );
}

export default DashboardContent;