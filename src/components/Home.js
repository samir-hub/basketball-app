import React from "react";
import "./Home.css";
import westbrook from './westbrook.jpg'

const Home = () => {
  return (
    <div className="main-div">
      <div className="welcome-div">
        <img className="main-image" src={westbrook} alt="Pic"/>
      </div>
      <div className="cta-div">
        <h1 className="cta-heading">Basketball Stats</h1>
        <h2 className="cta-text">
          Welcome to Basketball Stats. You can check out your favorite team's stats or see how your favorite player is faring this season.
        </h2>
        <p className="input-title">Enter your favorite team here:</p>
        <input className="cta-favteam"></input>
      </div>
    </div>
  );
};

export default Home;
