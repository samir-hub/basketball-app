import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TeamStats from "./components/TeamStats";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerForm from "./components/PlayerForm";


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teamstats" component={TeamStats} />
          {/* <Route path="/playerstats" component={PlayerForm} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
