import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const hasToken = () => localStorage.getItem( 'NC_token' ) ? true : false;

const SessionRoute = props =>
    hasToken()        
    ? <Redirect to='/dashboard' />
    : <Route {...props} />;

export default SessionRoute;