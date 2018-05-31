import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../layouts/Dashboard';

const DashboardContent = (props) => {
    return (
        <Layout>
            <h5>Dashboard Content (Instead of this, should be the routes)</h5>
            
            {/* Something like this */}
            {/* <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/" exact component={BurgerBuilder} />
            </Switch> */}
        </Layout>
    );
}

export default DashboardContent;