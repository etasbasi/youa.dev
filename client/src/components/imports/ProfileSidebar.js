import React from "react";

export default function ProfileSidebar() {
  return (
    <div className="sidebar_nav">
      <ul className="sidebar_nav_list">
        <li className="sidebar_nav_list--item">
          <i className="sidebar_nav_list--item--icon fas fa-user" />
          <p className="sidebar_nav_list--item--text">Home</p>
        </li>
        <li className="sidebar_nav_list--item">
          <i className="sidebar_nav_list--item--icon fas fa-user" />
          <p className="sidebar_nav_list--item--text">Feed</p>
        </li>
        <li className="sidebar_nav_list--item" data-ref="sidebar_logs">
          <i className="sidebar_nav_list--item--icon fas fa-clipboard-list" />
          <p className="sidebar_nav_list--item--text">Posts</p>
        </li>
        <li className="sidebar_nav_list--item" data-ref="sidebar_tickets">
          <i className="sidebar_nav_list--item--icon fas fa-ticket-alt" />
          <p className="sidebar_nav_list--item--text">Messages</p>
        </li>
        <li className="sidebar_nav_list--item" data-ref="sidebar_reports">
          <i className="sidebar_nav_list--item--icon fas fa-flag" />
          <p className="sidebar_nav_list--item--text">Settings</p>
        </li>
      </ul>
    </div>
  );
}
