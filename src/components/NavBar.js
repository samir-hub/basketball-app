import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <header className="navlinks">
        <Link className="button" to="/">
          Home
        </Link>
        <Link className="button" to="/teamstats">
          Team Stats
        </Link>
        <Link className="button" to="/playerstats">Shot Charts</Link>
        <Link className="button" to="/teamstats">Login</Link>
      </header>
    </div>
  );
}

export default NavBar;
