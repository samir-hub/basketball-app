import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./PlayerStats.css";

const PlayerStats = (props) => {
  const [shotData, setShotData] = useState([]);
  





  let season = "2020";
  let jHarden = "201935";

  let shotsApi = `https:stats.theseventhman.net/stats/api/v1/players/shots/?&season=${season}&player=${jHarden}`;
  
  let player = props.realPlayer;
  console.log('THIS',player)
   


      useEffect(() => {
      axios.get(shotsApi).then(response => {
        console.log(response.data);
        setShotData(response.data);
      });
    }, []);

    let madeShots = shotData.map(e => {
      return { x: e.x, y: e.y, z: e.lg_made };
    });

    let filteredMadeShots = madeShots.filter(function(e) {
      if (e.z === 0) {
        return false; // skip
      }
      return true;
    });

   

    let missedShots = shotData.map(e => {
      return { x: e.x, y: e.y, z: e.lg_attempted - e.lg_made };
    });

    let filteredMissedShots = missedShots.filter(function(e) {
      if (e.z === 0) {
        return false; // skip
      }
      return true;
    });

  

console.log("props in player stats",props);

  
  return (
    <div className="player-div">
      {/* <div className="second-team-div">
        <h1 className="team-main-heading">Offensive and Defensive Efficiency By Team:</h1>
      </div>
      <LineChart
        className="team-chart"
        width={1500}
        height={500}
        data={off_def_rating}
        margin={{
          top: 15, right: 30, left: 20, bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="off_rating" stroke="#2f4f4f" activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="def_rating" stroke="#de733f" activeDot={{ r: 6 }}/>
      </LineChart> */}

      <ScatterChart
      className="player-chart"
        width={800}
        height={550}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="x"  />
        <YAxis type="number" dataKey="y" name="y"  />
        <ZAxis
          type="number"
          dataKey="z"
          range={[60, 400]}
          name="volume"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="Made" data={filteredMadeShots} fill="#00ff00" shape="circle" />
        <Scatter
          name="Missed"
          data={filteredMissedShots}
          fill="#FF0000"
          shape="circle"
        />
      </ScatterChart>
    </div>
  );
};

export default PlayerStats;
