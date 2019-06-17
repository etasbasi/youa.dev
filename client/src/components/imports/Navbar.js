import React from "react";
import openSidebar from "../../utils/openSidebar";

export default function Navbar(props) {
  return (
    <div id="navbar" className="navbar">
      <p className="navbar__logo">youa.dev</p>
      <div className="navbar__account" onClick={openSidebar}>
        <img
          className="navbar__account__picture"
          src={props.profilePicture}
          alt="Profile"
        />
        <p className="navbar__account__name">
          {`${props.firstName} ${props.lastName}`}
        </p>
      </div>
    </div>
  );
}
