import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
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

const { Content, Footer } = Layout;

const PlayerStats = props => {
  const [shotData, setShotData] = useState([]);
  const [selected, setSelected] = useState({
    selectedId: "201935",
    selectedName: "James Harden"
  });

  let season = "2020";
  // let jHarden = "201935";

  let shotsApi = `https:stats.theseventhman.net/stats/api/v1/players/shots/?&season=${season}&player=${selected.selectedId}`;

  // let player = props.realPlayer;
  // console.log('THIS',player)

  useEffect(() => {
    axios.get(shotsApi).then(response => {
      console.log(response.data);
      setShotData(response.data);
    });
  }, [shotsApi]);

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

  const displayPlayers = () => {
    var data = props.namesAndIds;
    if (data.loading) {
      return <div>Loading players...</div>;
    } else {
      return data.map((player, index) => {
        return (
          <option key={index} value={player.player_id}>
            {" "}
            {player.player_name}{" "}
          </option>
        );
      });
    }
  };

  console.log(selected);

  return (
    <div className="player-div">
      <Layout>
        <Layout>
       
            <form className="select-form">
              <div className="field">
                <h1 className="select-title">Select a Player:</h1>
                <select
                  onChange={e => setSelected({ selectedId: e.target.value })}
                >
                  <option>Select player</option>
                  {displayPlayers()}
                </select>
              </div>
            </form>
        
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "8px 0" }}></Breadcrumb>

            <Content
            className="stylethis"
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
                
              }}
            >
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
                  data={filteredMadeShots}
                  fill="#00ff00"
                  shape="circle"
                />
                <Scatter
                  name="Missed"
                  data={filteredMissedShots}
                  fill="#FF0000"
                  shape="circle"
                />
              </ScatterChart>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Basketball Stats ©2019 Created by Samir Lilienfeld
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default PlayerStats;
