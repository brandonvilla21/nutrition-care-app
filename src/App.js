import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './material-theme';
import { Switch, BrowserRouter } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Signin from './containers/Signin';
import { ADMINISTRATOR, REGULAR } from './shared/user-roles';
import ProtectedRoute from './components/ProtectedRoute';
import SessionRoute from './components/SessionRoute/SessionRoute';
import { Redirect, Route } from 'react-router-dom';

import 'react-table/react-table.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
              type={[ADMINISTRATOR, REGULAR]}
              path="/dashboard"
              component={Dashboard} />
          <SessionRoute path="/admin-login"
            render={() => <Login type={ADMINISTRATOR} header="Inicia Sesión como administrador"/> }/>
          <SessionRoute path="/login"
            render={() => <Login type={REGULAR} header="Inicia Sesión"/> }/>
          <SessionRoute path="/signin" component={Signin} />
          <Route render={() => <Redirect to="/dashboard" />} />
        </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
