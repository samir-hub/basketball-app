import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TeamStats from "./components/TeamStats";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerStats from "./components/PlayerStats";

function App() {
  const [namesAndIds, setNamesAndIds] = useState([]);

  let playersApi = `https://stats.theseventhman.net/stats/api/v1/players/distinct/`;

  useEffect(() => {
    axios.get(playersApi).then(response => {
      setNamesAndIds(response.data);
    });
  }, []);
  return (
    <div className="app-container">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teamstats" component={TeamStats} />
          <Route
            path="/playerstats"
            render={props => <PlayerStats {...props} namesAndIds={namesAndIds} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
