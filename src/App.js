import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TeamStats from "./components/graphs/TeamStats";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerStats from "./components/shots/PlayerStats";
import MyTeam from "./components/players/MyTeam";
import Standings from "./components/standings/Standings";
import MobileNavBar from "./components/MobileNavBar";
import MobileHeader from "./components/MobileHeader";
// import TabBarComp from './components/TabBarComp';

function App() {
  const [namesAndIds, setNamesAndIds] = useState([]);
  let playersApi = `https://stats.theseventhman.net/stats/api/v1/players/distinct/`;

  const [teamsAndIds, setTeamsAndIds] = useState([]);
  let teamsApi = `https://stats.theseventhman.net/stats/api/v1/teams/all/`;

  useEffect(() => {
    axios.get(playersApi).then(response => {
      setNamesAndIds(response.data);
    });
  }, [playersApi]);

  useEffect(() => {
    axios.get(teamsApi).then(response => {
      setTeamsAndIds(response.data);
    });
  }, [teamsApi]);
  return (
    <div className="app-container">
      <BrowserRouter>
        <header className="main-header">
          <NavBar/>
           <Route
            render={props => <MobileHeader {...props} />}
          />
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
              <PlayerStats
                {...props}
                teamsAndIds={teamsAndIds}
                namesAndIds={namesAndIds}
              />
            )}
          />
          <Route
            path="/myteam"
            render={props => <MyTeam {...props} teamsAndIds={teamsAndIds} />}
          />
          <Route
            path="/standings"
            render={props => <Standings {...props} teamsAndIds={teamsAndIds} />}
          />
        </Switch>
        <footer>
          <MobileNavBar className="mobile-navbar" />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
