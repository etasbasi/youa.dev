import React from "react";
import openDrawer from "../../utils/openDrawer";

export default function Sidebar(props) {
  if (!props._super) {
    return (
      <div className="sidebar_nav">
        <ul className="sidebar_nav_list">
          <li className="sidebar_nav_list--item" onClick={openDrawer}>
            <i className="sidebar_nav_list--item--icon fas fa-user" />
            <p className="sidebar_nav_list--item--text">User</p>
          </li>
          <li className="sidebar_nav_list--item">
            <i className="sidebar_nav_list--item--icon fas fa-home" />
            <p className="sidebar_nav_list--item--text">Home</p>
          </li>
          <li className="sidebar_nav_list--item">
            <i className="sidebar_nav_list--item--icon fas fa-rss-square" />
            <p className="sidebar_nav_list--item--text">Feed</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_logs">
            <i className="sidebar_nav_list--item--icon fas fa-comment" />
            <p className="sidebar_nav_list--item--text">Posts</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_tickets">
            <i className="sidebar_nav_list--item--icon fas fa-envelope" />
            <p className="sidebar_nav_list--item--text">Messages</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_reports">
            <i className="sidebar_nav_list--item--icon fas fa-cog" />
            <p className="sidebar_nav_list--item--text">Settings</p>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="sidebar_nav">
        <ul className="sidebar_nav_list">
          <li className="sidebar_nav_list--item" onClick={openDrawer}>
            <i className="sidebar_nav_list--item--icon fas fa-user" />
            <p className="sidebar_nav_list--item--text">User</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_server">
            <i className="sidebar_nav_list--item--icon fas fa-server" />
            <p className="sidebar_nav_list--item--text">Server Status</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_logs">
            <i className="sidebar_nav_list--item--icon fas fa-clipboard-list" />
            <p className="sidebar_nav_list--item--text">Logs</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_tickets">
            <i className="sidebar_nav_list--item--icon fas fa-ticket-alt" />
            <p className="sidebar_nav_list--item--text">Tickets</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_reports">
            <i className="sidebar_nav_list--item--icon fas fa-flag" />
            <p className="sidebar_nav_list--item--text">Reports</p>
          </li>
          <li className="sidebar_nav_list--item" data-ref="sidebar_reports">
            <i className="sidebar_nav_list--item--icon fas fa-cog" />
            <p className="sidebar_nav_list--item--text">Settings</p>
          </li>
        </ul>
      </div>
    );
  }
}
