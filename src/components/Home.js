import React from "react";
import "./Home.css";
import westbrook from "./westbrook.jpg";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Footer } = Layout;

const Home = () => {


  return (
    <>
      <div className="main-div">
        <div className="welcome-div">
          <img className="main-image" src={westbrook} alt="Pic" />
        </div>
        <div className="cta-div">
          <h1 className="cta-heading">Basketball Stats</h1>
          <h2 className="cta-text">
            Welcome to Basketball Stats. You can check out your favorite team's
            stats or see how your favorite player is faring this season.
          </h2>
          {/* <form className="select-team-form">
          <div className="field">
            <h1 className="select-title">Select Your Team:</h1>
            <select onChange={e => setFavTeam({ teamId: e.target.value })}>
              <option className="fav-team-placeholder">Select team</option>
              {displayTeams()}
            </select>
          </div>
        </form> */}
        </div>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Basketball Stats ©2019 Created by Samir Lilienfeld
      </Footer>
    </>
  );
};

export default Home;
