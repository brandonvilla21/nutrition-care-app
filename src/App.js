import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './layouts/Dashboard/DashboardContent';
import Login from './layouts/Session/LoginContent';
import Signin from './layouts/Session/SigninContent';

class App extends Component {
  render() {  
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
      </Switch>
    );
  }
}

export default App;
