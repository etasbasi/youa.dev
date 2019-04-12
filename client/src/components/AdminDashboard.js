// eslint-disable-next-line
import React, { Component } from "react";
import Store from "../Store";

const Sidebar = () => {
  return (
    <div className="dashboard_nav">
      <ul className="dashboard_nav_list">
        <li className="dashboard_nav_list--item">
          <i className="dashboard_nav_list--item--icon fas fa-user" />
          <p className="dashboard_nav_list--item--text">User</p>
        </li>
        <li className="dashboard_nav_list--item" data-ref="dashboard_server">
          <i className="dashboard_nav_list--item--icon fas fa-server" />
          <p className="dashboard_nav_list--item--text">Server Status</p>
        </li>
        <li className="dashboard_nav_list--item" data-ref="dashboard_logs">
          <i className="dashboard_nav_list--item--icon fas fa-clipboard-list" />
          <p className="dashboard_nav_list--item--text">Logs</p>
        </li>
        <li className="dashboard_nav_list--item" data-ref="dashboard_tickets">
          <i className="dashboard_nav_list--item--icon fas fa-ticket-alt" />
          <p className="dashboard_nav_list--item--text">Tickets</p>
        </li>
        <li className="dashboard_nav_list--item" data-ref="dashboard_reports">
          <i className="dashboard_nav_list--item--icon fas fa-flag" />
          <p className="dashboard_nav_list--item--text">Reports</p>
        </li>
      </ul>
    </div>
  );
};

const ProfileDrawer = () => {
  return (
    <div className="profile toggle_drawer" id="profile_drawer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        alt="profile"
        className="profile_image"
      />
      <div className="profile_info">
        <p className="profile_info--name">Test</p>
        <p className="profile_info--email">test@gmail.com</p>
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
};

class AdminDashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <ProfileDrawer />
        <div className="dashboard_content">
          <h1 className="dashboard_content_title">Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
