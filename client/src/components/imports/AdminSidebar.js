import React from "react";

export default function AdminSidebar() {
  return (
    <div className="sidebar_nav">
      <ul className="sidebar_nav_list">
        <li className="sidebar_nav_list--item">
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
      </ul>
    </div>
  );
}
