import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Signin from './containers/Signin';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './material-theme';

class App extends Component {
  render() {  
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
