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
            <p>{this.state.profile.biography}</p>
            <p>{this.state.profile.dev}</p>
            <p>{this.state.profile.linkedin}</p>
            <p>{this.state.profile.github}</p>
            <p>{this.state.profile.stackoverflow}</p>
            <p>{this.state.profile.website}</p>
          </Fragment>
        ) : (
          <p>No Profile Found</p>
        )}
      </div>
    );
  }
}
