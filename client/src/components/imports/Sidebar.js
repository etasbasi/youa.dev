import React, { Fragment } from "react";
import openDrawer from "../../utils/openDrawer";

export default function Sidebar(props) {
  return (
    <div className="sidebar_nav">
      <ul className="sidebar_nav_list">
        <li className="sidebar_nav_list--item" onClick={openDrawer}>
          <i className="sidebar_nav_list--item--icon fas fa-user" />
          <p className="sidebar_nav_list--item--text">User</p>
        </li>
        {props._super ? (
          <Fragment>
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
          </Fragment>
        ) : (
          <Fragment>
            <li
              className="sidebar_nav_list--item"
              onClick={() => (window.location.href = props.handle)}
            >
              <i className="sidebar_nav_list--item--icon fas fa-home" />
              <p className="sidebar_nav_list--item--text">Home</p>
            </li>
            <li
              className="sidebar_nav_list--item"
              data-ref="sidebar_tickets"
              onClick={() => (window.location.href = "/new-post")}
            >
              <i className="sidebar_nav_list--item--icon fas fa-plus-square" />
              <p className="sidebar_nav_list--item--text">New Post</p>
            </li>
            <li
              className="sidebar_nav_list--item"
              onClick={() => (window.location.href = "/dashboard")}
            >
              <i className="sidebar_nav_list--item--icon fas fa-columns" />
              <p className="sidebar_nav_list--item--text">Dashboard</p>
            </li>
            <li className="sidebar_nav_list--item" data-ref="sidebar_tickets">
              <i className="sidebar_nav_list--item--icon fas fa-envelope" />
              <p className="sidebar_nav_list--item--text">Messages</p>
            </li>
            <li className="sidebar_nav_list--item" data-ref="sidebar_reports">
              <i className="sidebar_nav_list--item--icon fas fa-cog" />
              <p className="sidebar_nav_list--item--text">Settings</p>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
}
