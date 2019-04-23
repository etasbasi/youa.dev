import React, { Component } from "react";
import Store from "../Store";

// TODO: => Implement a redirection system if an user with a profile tries accessing this page
export default class ProfileCreation extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
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
  handleSubmit = e => {
    e.preventDefault();
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
    for (let i in data) {
      if (data[i] === "") data[i] = undefined;
    }
    Store.createProfile(data);
  };
  render() {
    return (
      <div className="profile_creation">
        <h1 className="profile_creation--title">Create your profile:</h1>
        <form className="profile_creation--form">
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="profilePicture"
              placeholder="Profile Picture (Optional)"
              onChange={this.handleChange}
              value={this.state.profilePicture}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="biography"
              placeholder="Biography (Optional)"
              onChange={this.handleChange}
              value={this.state.biography}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="github"
              placeholder="GitHub (Optional)"
              onChange={this.handleChange}
              value={this.state.github}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="linkedin"
              placeholder="LinkedIn (Optional)"
              onChange={this.handleChange}
              value={this.state.linkedin}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="dev"
              placeholder="Dev.to (Optional)"
              onChange={this.handleChange}
              value={this.state.dev}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="stackoverflow"
              placeholder="StackOverflow (Optional)"
              onChange={this.handleChange}
              value={this.state.stackoverflow}
            />
          </div>
          <div className="profile_creation--form_wrapper">
            <input
              className="profile_creation--form_wrapper--input"
              type="text"
              name="website"
              placeholder="Personal Website (Optional)"
              onChange={this.handleChange}
              value={this.state.website}
            />
          </div>
        </form>
        <div className="profile_creation--button--wrapper">
          <button
            className="profile_creation--button_button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
