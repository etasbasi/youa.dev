import React, { Component } from "react";
import Store from "../Store";
import ReactMarkdown from "react-markdown";

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
          <div className="post_page_output">
            <ReactMarkdown source={this.state.post.body} />
          </div>
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
