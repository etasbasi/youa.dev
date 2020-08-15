import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import AdminDashboard from "./components/AdminDashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProfileCreation from "./components/ProfileCreation";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import PostCreation from "./components/PostCreation";
import Sidebar from "./components/imports/Sidebar";
import Store from "./Store";
import isLoggedIn from "./utils/isLoggedIn";
import Navbar from "./components/imports/Navbar";
import PrivateRoute from "./components/imports/PrivateRoute";

// FIXME: => Move socket module to the components where chat will be accessible from
// eslint-disable-next-line
// import Socket from "./Socket";

export default function App() {
  let [user, setUser] = useState({});

  useEffect(() => {
    if (isLoggedIn()) {
      // Store.checkProfile().then((user) => setUser(user));
      let userData = Store.checkProfile();
      setUser(userData);
      console.log(user);
    }
  }, []);

  return (
    <Router>
      <div className="main_container">
        <Navbar
          isLoggedin={user !== {}}
          profilePicture={user.profilePicture}
          firstName={user.firstName}
          lastName={user.lastName}
        />
        <Sidebar isLoggedIN={user !== {}} handle={`/profile/${user.handle}`} />
        <Switch>
          <Route strict exact path="/" component={Landing} />
          <Route strict exact path="/admin" component={AdminDashboard} />
          <Route strict exact path="/register" component={Register} />
          <Route strict exact path="/login" component={Login} />
          <Route
            strict
            exact
            path="/profile/:handle"
            component={Profile}
            user={user}
          />
          <Route strict exact path="/create" component={ProfileCreation} />
          <Route strict exact path="/post/:handle" component={Post} />
          <Route strict exact path="/new-post" component={PostCreation} />
          <PrivateRoute strict exact path="/dashboard" component={Dashboard} />
          <Route strict component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
