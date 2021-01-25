import React from "react";
import "../../css/components/Admin/Sidebar.scss";
import { NavLink } from "react-router-dom";

function Sidebar({ which }) {
  return (
    <div id="sidebar">
      <NavLink
        className="item"
        to={`/${which}`}
        exact
        activeClassName="item-active"
      >
        <div>Manage Users</div>
      </NavLink>

      <NavLink
        className="item"
        to={`/${which}/mangePost`}
        activeClassName="item-active"
        exact
      >
        <div>Manage Posts</div>
      </NavLink>

      {which == "admin" ? (
        <NavLink
          className="item"
          to="/admin/manageModerators"
          activeClassName="item-active"
          exact
        >
          <div>Manage Moderators</div>
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
}

export default Sidebar;
