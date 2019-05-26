import React, { Component } from "react";
import Navbar from "./imports/Navbar";
import Store from "../Store";

export default class Dashboard extends Component {
  componentDidMount() {
    Store.checkProfile().then(profile => {
      if (!profile) window.location.href = "/";
    });
  }
  render() {
    return (
      <div id="dashboard" className="dashboard">
        <Navbar />
      </div>
    );
  }
}
