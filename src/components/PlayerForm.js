import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerStats from "./PlayerStats";
import axios from "axios";


function PlayerForm() {

    const [playerSelected, setPlayerSelected] = useState({
        player: ""
      });
      const [playersId, setPlayersId] = useState([]);

      let playersApi = `https://stats.theseventhman.net/stats/api/v1/players/distinct/`;

      const handleChange = e => {
        e.preventDefault();
        setPlayerSelected({
          [e.target.name]: e.target.value
        });
      };

      useEffect(() => {
        axios.get(playersApi).then(response => {
          
          setPlayersId(response.data);
        });
      }, []);

      let playerId = playersId.filter(function(e) {
        if (e.player_name === playerSelected.player){
            return true;
        }
    })
    
    console.log(playerId);
    console.log(playerSelected.player)
  return (
    <div className="app-container">
            <form>
        <input
          type="text"
          name="player"
          value={playerSelected.player}
          onChange={handleChange}
        />
        <button>Choose Player</button>
      </form>
      <PlayerStats realPlayer={playerId}/>
    </div>
  );
}

export default PlayerForm;