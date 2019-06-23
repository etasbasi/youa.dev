import React from "react";
import openSidebar from "../../utils/openSidebar";
import isLoggedIn from "../../utils/isLoggedIn";

export default function Navbar(props) {
  return (
    <div id="navbar" className="navbar">
      <p
        className="navbar__logo"
        onClick={() =>
          (window.location.href = isLoggedIn() ? "/dashboard" : "/")
        }
        style={{ cursor: "pointer" }}
      >
        youa.dev
      </p>
      <div
        className="navbar__account"
        onClick={
          isLoggedIn() ? openSidebar : () => (window.location.href = "/login")
        }
      >
        {isLoggedIn() ? (
          <React.Fragment>
            <img
              className="navbar__account__picture"
              src={props.profilePicture}
              alt="Profile"
            />
            <p className="navbar__account__name">
              {`${props.firstName} ${props.lastName}`}
            </p>
          </React.Fragment>
        ) : (
          <p className="navbar__account__login">Log In</p>
        )}
      </div>
    </div>
  );
}
