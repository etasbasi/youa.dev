import React from "react";

export default function ProfileDrawer(props) {
  if (!props._super) {
    return (
      <div className="profile_page_drawer">
        <img
          src={props.profilePicture}
          alt="profile"
          className="profile_image"
        />
        <div className="profile_info">
          <p className="profile_info--name">
            {props.firstName} {props.lastName}
          </p>
        </div>
        <div className="profile_actions">
          <ul className="profile_actions_list">
            <li className="profile_actions_list--item">
              <i className="profile_actions_list--item--icon fas fa-sign-out-alt" />
              <p className="profile_actions_list--item--text">Log out</p>
            </li>
            <li className="profile_actions_list--item">
              <i className="profile_actions_list--item--icon fas fa-times" />
              <p className="profile_actions_list--item--text">Close</p>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="profile_admin_page_drawer">
        <img
          src={props.profilePicture}
          alt="profile"
          className="profile_admin_image"
        />
        <div className="profile_admin_info">
          <p className="profile_admin_info--name">
            {props.firstName} {props.lastName}
          </p>
        </div>
        <div className="profile_admin_actions">
          <ul className="profile_admin_actions_list">
            <li className="profile_admin_actions_list--item">
              <i className="profile_admin_actions_list--item--icon fas fa-sign-out-alt" />
              <p className="profile_admin_actions_list--item--text">Log out</p>
            </li>
            <li className="profile_admin_actions_list--item">
              <i className="profile_admin_actions_list--item--icon fas fa-times" />
              <p className="profile_admin_actions_list--item--text">Close</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
