import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left-group">
        <div className="logo-div">
            <Link to="/">
          <img
            src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg"
            alt="logo"
          />
          </Link>
        </div>
        <div className="home-div">
          <img
            src="https://img.icons8.com/material-rounded/24/000000/home.png"
            alt="home"
          />
        </div>
        <div className="podcast-div">
          <img
            src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-podcast-podcast-xnimrodx-lineal-color-xnimrodx-2.png"
            alt="podcast"
          />
        </div>
      </div>
        <div className="user-div">
      <Link to="/login">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/change-user-male.png"
            alt="user"
          />
      </Link>
        </div>
    </div>
  );
}

export default Navbar;
