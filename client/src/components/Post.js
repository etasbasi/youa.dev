import React, { Component } from "react";
import showdown from "showdown";
import Store from "../Store";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: false
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
  };
  render() {
    if (this.state.post) {
      return (
        <div className="post_page" id="post_page">
          <p>{this.state.post.title}</p>
          <p>{this.state.post.body}</p>
        </div>
      );
    } else {
      return (
        <div className="post_page" id="post_page">
          <p>No post found.</p>
        </div>
      );
    }
  }
}
