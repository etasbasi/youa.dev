import React, { Component } from "react";
import Store from "../Store";

export default class ProfileCreation extends Component {
  constructor() {
    super();
    this.state = {
      firstName: undefined,
      lastName: undefined,
      profilePicture: "",
      biography: "",
      github: "",
      linkedin: "",
      dev: "",
      stackoverflow: "",
      website: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit() {
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      profilePicture: this.state.profilePicture,
      biography: this.state.biography,
      github: this.state.github,
      linkedin: this.state.linkedin,
      dev: this.state.dev,
      stackoverflow: this.state.stackoverflow,
      website: this.state.website
    };
    Store.createProfile(data);
  }
  render() {
    // FIXME: => Produce a better solution for the conditional render to avoid API calls once every darn state change...
    Store.getUserProfile()
      .then(result => {
        if (result) {
          window.location.href = `/profile/${
            Store.warehouse.userProfile.handle
          }`;
        }
      })
      .catch(err => {
        document.getElementById("Showme").style.display = "block";
      });
    return (
      <div id="Showme">
        <h1>Create your profile</h1>
        <form>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          <div>
            <input
              type="text"
              name="profilePicture"
              placeholder="Profile Picture (Optional)"
              onChange={this.handleChange}
              value={this.state.profilePicture}
            />
          </div>
          <div>
            <input
              type="text"
              name="biography"
              placeholder="Biography (Optional)"
              onChange={this.handleChange}
              value={this.state.biography}
            />
          </div>
          <div>
            <input
              type="text"
              name="github"
              placeholder="GitHub (Optional)"
              onChange={this.handleChange}
              value={this.state.github}
            />
          </div>
          <div>
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn (Optional)"
              onChange={this.handleChange}
              value={this.state.linkedin}
            />
          </div>
          <div>
            <input
              type="text"
              name="dev"
              placeholder="Dev.to (Optional)"
              onChange={this.handleChange}
              value={this.state.dev}
            />
          </div>
          <div>
            <input
              type="text"
              name="stackoverflow"
              placeholder="StackOverflow (Optional)"
              onChange={this.handleChange}
              value={this.state.stackoverflow}
            />
          </div>
          <div>
            <input
              type="text"
              name="website"
              placeholder="Personal Website (Optional)"
              onChange={this.handleChange}
              value={this.state.website}
            />
          </div>
          <div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
