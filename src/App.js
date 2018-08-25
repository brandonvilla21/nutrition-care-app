import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './material-theme';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Signin from './containers/Signin';
import { ADMINISTRATOR, CUSTOMER } from './shared/user-roles';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
              type={[ADMINISTRATOR, CUSTOMER]}
              path="/dashboard"
              component={Dashboard} />
          <Route path="/admin-login"
            render={() => <Login type={ADMINISTRATOR} header="Inicia Sesión como administrador"/> }/>
          <Route path="/login"
            render={() => <Login type={CUSTOMER} header="Inicia Sesión"/> }/>
          <Route path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
