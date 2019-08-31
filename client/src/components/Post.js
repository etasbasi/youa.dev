import React, { Component } from "react";
import Store from "../Store";
import ReactMarkdown from "react-markdown";
import Navbar from "./imports/Navbar";
import isLoggedIn from "../utils/isLoggedIn";
import Sidebar from "./imports/Sidebar";
import ProfileDrawer from "./imports/ProfileDrawer";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
      user: false
    };
  }
  componentDidMount = () => {
    Store.getPost(this.props.match.params.handle, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ data });
      }
    });
    if (isLoggedIn()) {
      Store.checkProfile().then(profile => this.setState({ user: profile }));
      document.getElementsByClassName("sidebar_nav")[0].style.display = "none";
    }
  };
  render() {
    return (
      <div className="post_page" id="post_page">
        <Navbar
          profilePicture={this.state.user.profilePicture}
          firstName={this.state.user.firstName}
          lastName={this.state.user.lastName}
        />
        {isLoggedIn() ? (
          <React.Fragment>
            {" "}
            <ProfileDrawer
              profilePicture={this.state.user.profilePicture}
              firstName={this.state.user.firstName}
              lastName={this.state.user.lastName}
            />
            <Sidebar handle={`/profile/${this.state.user.handle}`} />
          </React.Fragment>
        ) : (
          ""
        )}
        {this.state.data.post ? (
          <React.Fragment>
            <div className="post_page_img"></div>
            <div className="post_page_titlebar">
              <img
                src={this.state.data.profile.profilePicture}
                alt="Profile"
                className="post_page_titlebar_img"
                onClick={() =>
                  (window.location.href = `/profile/${this.state.data.profile.handle}`)
                }
                style={{ cursor: "pointer" }}
              />
              <div className="post_page_titlebar_text-wrapper">
                <p className="post_page_titlebar_title">
                  {this.state.data.post.title}
                </p>
                <p
                  className="post_page_titlebar_user"
                  onClick={() =>
                    (window.location.href = `/profile/${this.state.data.profile.handle}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  {this.state.data.profile.firstName}{" "}
                  {this.state.data.profile.lastName}
                </p>
                <p className="post_page_titlebar_timestamp">
                  {this.state.data.post.createdAt.split("T")[0]}
                </p>
              </div>
            </div>
            <div className="post_page_body">
              <ReactMarkdown source={this.state.data.post.body} />
            </div>
          </React.Fragment>
        ) : (
          <p>No post found</p>
        )}
      </div>
    );
  }
}
