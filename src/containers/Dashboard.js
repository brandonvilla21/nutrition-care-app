import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layouts/Dashboard';
import Routine from './Routine/Routine';

const DashboardContent = ({ match }) => {
    return (
        <Layout>
            
            {/* 
                Change of logic:
                Routes shouldn't be here
                Why?: because this component doesn't have child routes
                However, the route "/routines" DOES have child routes
                    that could be: "/routines/create", "/routines/edit", "/routines/:id", etc.
                    same happens with: "/diets":  "/diets/create", etc.

                New solution:
                What will it be in this component?: Just the content for the dashboard
                Where will the routes be now?: In App component, along with:
                    "/"
                    "login"
                    "signin"
                    And now (names are still tentative):
                    "/routines"
                    "/diets"
                    "/my-info"
             */}
            
            
            <Route
                exact
                path={match.url}
                render={() => <h5>Dashboard Content</h5>}
            />
            <Route path={`${match.url}/routine`} component={Routine}/>
            {/* Dashboard content goes here */}
        </Layout>
    );
}

export default DashboardContent;