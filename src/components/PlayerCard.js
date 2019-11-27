import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
// import "./Home.css";

const PlayerCard = props => {
  const [newData, setNewData] = useState([]);

  let api = `https://stats.theseventhman.net/stats/api/v1/players/?&season=2020&player=${props.chosen}`;

  useEffect(() => {
    axios.get(api).then(response => {
      setNewData(response.data);
    });
  }, [api]);

  console.log(newData)

  return (
    <div className="main-div">
      <h1>{newData.map(stat => {
          return stat.player_name
      })}</h1>
    </div>
  );
};

export default PlayerCard;
