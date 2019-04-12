import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AdminDashboard from "./components/AdminDashboard";

// FIXME: => Move socket module to the components where chat will be accessible from
// eslint-disable-next-line
import Socket from "./Socket";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route strict exact path="/" component={Landing} />
        <Route strict exact path="/admin" component={AdminDashboard} />
      </Router>
    );
  }
}
