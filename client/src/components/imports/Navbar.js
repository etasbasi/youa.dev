import React from "react";
import openSidebar from "../../utils/openSidebar";
import { NavLink } from "react-router-dom";

export default function Navbar({
  isLoggedIn,
  profilePicture,
  firstName,
  lastName
}) {
  return (
    <div id="navbar" className="navbar">
      <p
        className="navbar__logo"
        onClick={() => (window.location.href = isLoggedIn ? "/dashboard" : "/")}
        style={{ cursor: "pointer" }}
      >
        youa.dev
      </p>
      <div
        className="navbar__account"
        onClick={
          isLoggedIn ? openSidebar : () => (window.location.href = "/login")
        }
      >
        {isLoggedIn ? (
          <React.Fragment>
            <img
              className="navbar__account__picture"
              src={profilePicture}
              alt="Profile"
            />
            <p className="navbar__account__name">
              {`${firstName} ${lastName}`}
            </p>
          </React.Fragment>
        ) : (
          <p className="navbar__account__login">Log In</p>
        )}
      </div>
    </div>
  );
}
