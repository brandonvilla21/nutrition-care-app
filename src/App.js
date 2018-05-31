import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Signin from './containers/Signin';

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
