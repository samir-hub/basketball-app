import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TeamStats from "./components/TeamStats";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerStats from "./components/PlayerStats";
import MyTeam from "./components/MyTeam";

function App() {
  const [namesAndIds, setNamesAndIds] = useState([]);
  let playersApi = `https://stats.theseventhman.net/stats/api/v1/players/distinct/`;

  const [teamsAndIds, setTeamsAndIds] = useState([]);
  let teamsApi = `https://stats.theseventhman.net/stats/api/v1/teams/all/`;

  useEffect(() => {
    axios.get(playersApi).then(response => {
      setNamesAndIds(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(teamsApi).then(response => {
      setTeamsAndIds(response.data);
    });
  }, []);
  return (
    <div className="app-container">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} teamsAndIds={teamsAndIds} />}
          />
          <Route
            path="/teamstats"
            render={props => <TeamStats {...props} teamsAndIds={teamsAndIds} />}
          />
          <Route
            path="/playerstats"
            render={props => (
              <PlayerStats {...props} namesAndIds={namesAndIds} />
            )}
          />
          <Route
            path="/myteam"
            render={props => (
              <MyTeam {...props} teamsAndIds={teamsAndIds} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
