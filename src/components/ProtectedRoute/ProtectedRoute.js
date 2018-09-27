import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../services/user.service';


const ProtectedRoute = ({ component: Component, type, ...rest }) => 
    <Route {...rest} render={ props => (
        isAuthenticated( type )
            ? <Component {...props} />
            : <Redirect to='/admin-login' />
        )}
    />;

export default ProtectedRoute;