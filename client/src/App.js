import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AdminDashboard from "./components/AdminDashboard";
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
