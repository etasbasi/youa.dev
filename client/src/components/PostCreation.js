import React, { Component } from "react";
import Store from "../Store";
import Navbar from "./imports/Navbar";
import ProfileDrawer from "./imports/ProfileDrawer";
import Sidebar from "./imports/Sidebar";

export default class PostCreation extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    document.getElementsByClassName("sidebar_nav")[0].style.display = "none";
    Store.checkProfile()
      .then(profile =>
        profile ? this.setState(profile) : (window.location.href = "/login")
      )
      .catch(err => console.error(err));
  }
  handleClick = () => {
    const { title, body } = this.state;
    Store.createPost({ title, body });
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div id="editor" className="editor">
        <Navbar
          profilePicture={this.state.profilePicture}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <ProfileDrawer
          profilePicture={this.state.profilePicture}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <Sidebar handle={`/profile/${this.state.handle}`} />
        <div className="editor__controls">
          <input
            name="title"
            className="editor__controls__title"
            type="text"
            placeholder="Post title"
            onChange={this.handleChange}
          />
          <textarea
            placeholder="This is a Markdown editor. No funny stuff..."
            name="body"
            id="editor__controls__textarea"
            className="editor__controls__textarea"
            cols="30"
            rows="10"
            onChange={this.handleChange}
          />
          <button
            className="editor__controls__button"
            onClick={this.handleClick}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}
