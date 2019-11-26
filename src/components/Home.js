import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Home.css";
import westbrook from "./westbrook.jpg";
import MyTeam from "./MyTeam";

const Home = props => {
  const [favTeam, setFavTeam] = useState({
    teamId: "1610612745",
    teamName: "HOU"
  });

  const displayTeams = () => {
    var data = props.teamsAndIds;
    if (data.loading) {
      return <div>Loading players...</div>;
    } else {
      return data.map((team, index) => {
        return (
          <option className="fav-team-options" key={index} value={team.team_id}>
            {" "}
            {team.abbreviation}{" "}
          </option>
        );
      });
    }
  };

  return (
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
        <form className="select-team-form">
          <div className="field">
            <h1 className="select-title">Select Your Team:</h1>
            <select onChange={e => setFavTeam({ teamId: e.target.value })}>
              <option className="fav-team-placeholder">Select team</option>
              {displayTeams()}
            </select>
          </div>
        </form>
      </div>
      <BrowserRouter>
        <Route
          path="/myteam"
          render={props => <MyTeam {...props} favTeam={favTeam} />}
        />
      </BrowserRouter>
    </div>
  );
};

export default Home;
