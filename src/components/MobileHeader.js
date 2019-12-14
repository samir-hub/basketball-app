import React from "react";
import logo from '../components/tbs_avatar_logo.png'
import "../App.css";

const MobileHeader = (props) => {

    console.log("props in Mobile H", props)
  return (
    <div className="mobile-header">
    {props.location.pathname === "/" &&
      <img className="logo-image" src={logo} alt="logo" />}
      {props.location.pathname === "/myteam" &&
      <h1>Players</h1>}
      {props.location.pathname === "/standings" &&
      <h1>Standings</h1>}
      {props.location.pathname === "/playerstats" &&
      <h1>Shot Charts</h1>}
       {props.location.pathname === "/teamstats" &&
      <h1>Graphs</h1>}
    </div>
  );
};

export default MobileHeader;