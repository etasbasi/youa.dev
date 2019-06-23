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
      post: false,
      user: false
    };
  }
  componentDidMount = () => {
    Store.getPost(this.props.match.params.handle, (err, post) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({ post });
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
            <Sidebar handle={`/profile/${this.state.handle}`} />
          </React.Fragment>
        ) : (
          ""
        )}
        {this.state.post ? (
          <React.Fragment>
            <p>{this.state.post.title}</p>
            <div className="post_page_output">
              <ReactMarkdown source={this.state.post.body} />
            </div>
          </React.Fragment>
        ) : (
          <p>No post found</p>
        )}
      </div>
    );
    // if (this.state.post) {
    //   return (
    //     <div className="post_page" id="post_page">
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="post_page" id="post_page">
    //       <p>No post found.</p>
    //     </div>
    //   );
    // }
  }
}
