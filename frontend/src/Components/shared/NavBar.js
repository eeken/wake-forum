import React, { useState } from "react";
import "../../css/components/shared/NavBar.scss";
import { useStateValue } from "../../StateProvider";
import { NavLink } from "react-router-dom";
import CreatePost from "../models/CreatePost";

function NavBar() {
  const openPostModel = () => {
    document.getElementById("register-outer").style.display = "block";
  };

  const [{ user }] = useStateValue();

  const [isShowing, setIsShowing] = useState(false);

  const logout = () => {
    localStorage.setItem("loginToken", null);
    window.location.reload();
  };

  return (
    <>
      <CreatePost />
      <div id="nav-bar-conatiner">
        <h1 id="logo">Forum</h1>
        <ul id="nav">
          <NavLink
            className="nav-item"
            exact
            to="/"
            activeClassName="nav-item-active"
          >
            Home
          </NavLink>

          <NavLink
            className="nav-item"
            exact
            to="/about"
            activeClassName="nav-item-active"
          >
            About
          </NavLink>
          {user ? (
            <li
              className="nav-item nav-button"
              id="makePostButton"
              onClick={openPostModel}
            >
              Create Post
            </li>
          ) : (
            <NavLink to="/register">
              <li className="nav-item nav-button" id="register">
                Register
              </li>
            </NavLink>
          )}
          {user ? (
            <div
              id="profile-circle"
              onClick={() => {
                setIsShowing((prev) => {
                  return !prev;
                });
              }}
            >
              {user?.name[0]}
            </div>
          ) : (
            ""
          )}
        </ul>
        <div
          id="prifile-dropdow"
          style={{ display: isShowing ? "block" : "none" }}
        >
          <div>{user?.name}</div>
          <hr></hr>
          <div id="logout" onClick={logout}>
            Logout
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
