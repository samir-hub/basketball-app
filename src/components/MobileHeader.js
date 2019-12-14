import React from "react";
import logo from "../components/tbs_avatar_logo.png";
import "./MobileHeader.css";

const MobileHeader = props => {
  console.log("props in Mobile H", props);
  return (
    <div className="mobile-header">
      {props.location.pathname === "/" && (
        <img className="logo-image" src={logo} alt="logo" />
      )}
      {props.location.pathname === "/myteam" && (
        <h1 className="mh-title">Players</h1>
      )}
      {props.location.pathname === "/standings" && (
        <h1 className="mh-title">Standings</h1>
      )}
      {props.location.pathname === "/playerstats" && (
        <h1 className="mh-title">Shot Charts</h1>
      )}
      {props.location.pathname === "/teamstats" && (
        <h1 className="mh-title">Graphs</h1>
      )}
    </div>
  );
};

export default MobileHeader;
