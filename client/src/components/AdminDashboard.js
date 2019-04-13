// eslint-disable-next-line
import React, { Component } from "react";
import adminCheck from "../utils/adminCheck";
import Store from "../Store";
import RedirectToPath from "../utils/RedirectToPath";

const Sidebar = () => {
  return (
    <div className="admin_dashboard_nav">
      <ul className="admin_dashboard_nav_list">
        <li className="admin_dashboard_nav_list--item">
          <i className="admin_dashboard_nav_list--item--icon fas fa-user" />
          <p className="admin_dashboard_nav_list--item--text">User</p>
        </li>
        <li
          className="admin_dashboard_nav_list--item"
          data-ref="admin_dashboard_server"
        >
          <i className="admin_dashboard_nav_list--item--icon fas fa-server" />
          <p className="admin_dashboard_nav_list--item--text">Server Status</p>
        </li>
        <li
          className="admin_dashboard_nav_list--item"
          data-ref="admin_dashboard_logs"
        >
          <i className="admin_dashboard_nav_list--item--icon fas fa-clipboard-list" />
          <p className="admin_dashboard_nav_list--item--text">Logs</p>
        </li>
        <li
          className="admin_dashboard_nav_list--item"
          data-ref="admin_dashboard_tickets"
        >
          <i className="admin_dashboard_nav_list--item--icon fas fa-ticket-alt" />
          <p className="admin_dashboard_nav_list--item--text">Tickets</p>
        </li>
        <li
          className="admin_dashboard_nav_list--item"
          data-ref="admin_dashboard_reports"
        >
          <i className="admin_dashboard_nav_list--item--icon fas fa-flag" />
          <p className="admin_dashboard_nav_list--item--text">Reports</p>
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
    if (adminCheck()) {
      return (
        <div className="admin_dashboard">
          <Sidebar />
          <ProfileDrawer />
          <div className="admin_dashboard_content">
            <h1 className="admin_dashboard_content_title">Dashboard</h1>
          </div>
        </div>
      );
    } else {
      return RedirectToPath("/login");
    }
  }
}

export default AdminDashboard;
