import React, { Fragment, Component } from "react";
import Store from "../Store";
import ProfileDrawer from "./imports/ProfileDrawer";
import ProfileSidebar from "./imports/ProfileSidebar";
import isProfileOwner from "../utils/isProfileOwner";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: false
    };
  }
  componentDidMount() {
    Store.getProfile(this.props.match.params.handle, (err, profile) => {
      if (err) {
        console.error(err);
      } else {
        if (profile) {
          this.setState({ profile });
        }
      }
    });
  }
  render() {
    return (
      <div className="profile_page">
        {this.state.profile ? (
          <Fragment>
            {isProfileOwner(this.state.profile.id) ? (
              <Fragment>
                <ProfileSidebar />
                <ProfileDrawer
                  firstName={this.state.profile.firstName}
                  lastName={this.state.profile.lastName}
                  profilePicture={this.state.profile.profilePicture}
                />
              </Fragment>
            ) : (
              ""
            )}
            <div className="profile_page_header">
              <div className="profile_page_header--info">
                <img src={this.state.profile.profilePicture} alt="img" />
                <p className="profile_page_header--info_text">
                  {this.state.profile.firstName} {this.state.profile.lastName}
                </p>
                <p className="profile_page_header--info_text">
                  {this.state.profile.biography}
                </p>
              </div>
              <div className="profile_page_header--social">
                <a href={this.state.profile.github}>
                  <i className="fab fa-github-square fa-2x" />
                </a>
                <a href={this.state.profile.linkedin}>
                  <i className="fab fa-linkedin fa-2x" />
                </a>
                <a href={this.state.profile.stackoverflow}>
                  <i className="fab fa-stack-overflow fa-2x" />
                </a>
                <a href={this.state.profile.dev}>
                  <i className="fab fa-dev fa-2x" />
                </a>
                <a href={this.state.profile.website}>
                  <i className="fas fa-external-link-square-alt fa-2x" />
                </a>
              </div>
            </div>
          </Fragment>
        ) : (
          <p>No Profile Found</p>
        )}
      </div>
    );
  }
}
