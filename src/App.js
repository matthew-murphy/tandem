import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "../src/pages/PageNotFound";
import './App.css';
import Dashboard from "./components/home/Dashboard"
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { AuthProvider } from "./components/auth/Auth"
import PrivateRoute from "./components/auth/PrivateRoute"

class App extends Component {
  render() {
    return (
      <AuthProvider>
      <Router>
      <React.Fragment>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <PrivateRoute exact path="/Trivia" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
      </React.Fragment>
      </Router>
      </AuthProvider>
    );
  }
}
export default App;

