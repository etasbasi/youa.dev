import React from "react";
import ProfileDrawer from "./imports/ProfileDrawer";

export default function Dashboard({ profilePicture, firstName, lastName }) {
  return (
    <div id="dashboard" className="dashboard">
      <ProfileDrawer
        profilePicture={profilePicture}
        firstName={firstName}
        lastName={lastName}
      />
    </div>
  );
}
