import React from "react";
import openDrawer from "../../utils/openDrawer";

export default function Navbar(props) {
  return (
    <div id="navbar" className="navbar">
      <p className="navbar__logo">youa.dev</p>
      <div className="navbar__account" onClick={openDrawer}>
        <img
          className="navbar__account__picture"
          src={props.profilePicture || "http://lorempixel.com/400/200/cats/"}
          alt="Profile"
        />
        <p className="navbar__account__name">
          {`${props.firstName} ${props.lastName}` || "Khan, the cat."}
        </p>
      </div>
    </div>
  );
}
