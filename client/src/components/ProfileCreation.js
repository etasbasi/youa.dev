import React, { Component } from "react";
import Store from "../Store";

export default class ProfileCreation extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    Store.getUserProfile().then(result => {
      if (result) {
        window.location.href = "/profile";
      }
    });
    return (
      <div>
        <h1>Create your profile</h1>
      </div>
    );
  }
}
