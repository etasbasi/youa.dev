import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AdminDashboard from "./components/AdminDashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProfileCreation from "./components/ProfileCreation";
import Dashboard from "./components/Dashboard";

// FIXME: => Move socket module to the components where chat will be accessible from
// eslint-disable-next-line
// import Socket from "./Socket";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route strict exact path="/" component={Landing} />
        <Route strict exact path="/admin" component={AdminDashboard} />
        <Route strict exact path="/register" component={Register} />
        <Route strict exact path="/login" component={Login} />
        <Route strict exact path="/create" component={ProfileCreation} />
        <Route strict exact path="/profile/:handle" component={Profile} />
        <Route strict exact path="/post/:handle" component={Post} />
        <Route strict exact path="/dashboard" component={Dashboard} />
      </Router>
    );
  }
}
