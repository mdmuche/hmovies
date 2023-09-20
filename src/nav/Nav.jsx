import React from "react";
import "./Nav.scss";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to={"/"}>
        <div className="container logo-box">
          <div className="icon-box">
            <PiTelevisionSimpleBold className="tv-logo" />
          </div>
          <h2>MovieBox</h2>
        </div>
      </Link>
      <div className="search-container">
        <input type="text" placeholder="What do you want to watch" />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="container right">
        <h2>Sign in</h2>
        <div className="menu-box">
          <HiOutlineMenuAlt4 className="menu-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
