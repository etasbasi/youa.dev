import React from "react";
import openDrawer from "../../utils/openDrawer";
import logout from "../../utils/logout";

export default function ProfileDrawer(props) {
  return (
    <div className="profile_page_drawer">
      <img src={props.profilePicture} alt="profile" className="profile_image" />
      <div className="profile_info">
        <p className="profile_info--name">
          {props.firstName} {props.lastName}
        </p>
      </div>
      <div className="profile_actions">
        <ul className="profile_actions_list">
          <li className="profile_actions_list--item" onClick={logout}>
            <i className="profile_actions_list--item--icon fas fa-sign-out-alt" />
            <p className="profile_actions_list--item--text">Log out</p>
          </li>
          <li className="profile_actions_list--item" onClick={openDrawer}>
            <i className="profile_actions_list--item--icon fas fa-times" />
            <p className="profile_actions_list--item--text">Close</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
