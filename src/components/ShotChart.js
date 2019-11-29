import React, {useState, useEffect} from "react";
import axios from 'axios';
// import "./Home.css";

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
import "antd/dist/antd.css";

const ShotChart = (props) => {
    const [newData, setNewData] = useState([{
            attempted: 1,
            lg_attempted: 3,
            lg_made: 1,
            lg_x: -237,
            lg_y: 8,
            made: 1,
            x: -237,
            y: 8
          }]);

    let season = "2020";
  // let jHarden = "201935";

  let shotsApi = `https:stats.theseventhman.net/stats/api/v1/players/shots/?&season=2020&player=201935`;
  
    useEffect(() => {
      axios.get(shotsApi).then(response => {
        setNewData(response.data);
      });
    }, [shotsApi]);

    // let madeShots = newData.map(e => {
    //     return { x: e.x, y: e.y, z: e.lg_made };
    //   });
    
    //   let filteredMadeShots = madeShots.filter(function(e) {
    //     if (e.z === 0) {
    //       return false; // skip
    //     }
    //     return true;
    //   });
    
    //   let missedShots = newData.map(e => {
    //     return { x: e.x, y: e.y, z: e.lg_attempted - e.lg_made };
    //   });
    
    //   let filteredMissedShots = missedShots.filter(function(e) {
    //     if (e.z === 0) {
    //       return false; // skip
    //     }
    //     return true;
    //   });

  return (
    <>
      <div className="sc-main-div">
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
                <XAxis type="number" dataKey="x" name="x" />
                <YAxis type="number" dataKey="y" name="y" />
                <ZAxis
                  type="number"
                  dataKey="z"
                  range={[60, 400]}
                  name="volume"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Legend />
                <Scatter
                  name="Made"
                  data={newData.map(e => {
                    return { x: e.x, y: e.y, z: e.lg_made };
                  }).filter(function(e) {
                    if (e.z === 0) {
                      return false; // skip
                    }
                    return true;
                  })}
                  fill="#00ff00"
                  shape="circle"
                />
                <Scatter
                  name="Missed"
                  data={newData.map(e => {
                    return { x: e.x, y: e.y, z: e.lg_attempted - e.lg_made };
                  }).filter(function(e) {
                    if (e.z === 0) {
                      return false; // skip
                    }
                    return true;
                  })}
                  fill="#FF0000"
                  shape="circle"
                />
              </ScatterChart>
      </div>
     
    </>
  );
};

export default ShotChart;
