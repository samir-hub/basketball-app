import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlayerStats.css";
import Spin from "antd/es/spin";
import "antd/es/spin/style/css";

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

const ShotChart = props => {
  const [newData, setNewData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  let season = "2020";
  // let jHarden = "201935";

  let shotsApi = `https://stats.theseventhman.net/stats/api/v1/players/shots/?&season=${season}&player=${props.chosen}`;

  useEffect(() => {
    axios.get(shotsApi).then(response => {
      setNewData(response.data);
      setIsFetching(false);
    });
  }, [shotsApi]);

  const [data, setData] = useState([]);

  let api = `https://stats.theseventhman.net/stats/api/v1/players/?&season=2020&player=${props.chosen}`;

  useEffect(() => {
    axios.get(api).then(response => {
      setData(response.data);
    });
  }, [api]);

  return isFetching ? (
    <div className="shot-spinner spinner">
      <Spin size="large"/>
    </div>
  ) : (
    <>
      {data.map((prop, key) => {
        return (
          <h1 className="shot-title" key={key}>
            {prop.player_name}
          </h1>
        );
      })}
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
          <ZAxis type="number" dataKey="z" range={[60, 400]} name="volume" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter
            name="Made"
            data={newData
              .map(e => {
                return { x: e.x, y: e.y, z: e.lg_made };
              })
              .filter(function(e) {
                if (e.z === 0) {
                  return false; // skip
                } else if (e.y > 350) {
                  return false; //skip
                }
                return true;
              })}
            fill="#00ff00"
            shape="circle"
          />
          <Scatter
            name="Missed"
            data={newData
              .map(e => {
                return { x: e.x, y: e.y, z: e.lg_attempted - e.lg_made };
              })
              .filter(function(e) {
                if (e.z === 0) {
                  return false; // skip
                } else if (e.y > 350) {
                  return false; //skip
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
