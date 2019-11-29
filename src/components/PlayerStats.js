import React, { useState } from "react";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
// import axios from "axios";
import ShotChart from "./ShotChart";
import "./PlayerStats.css";

const { Content, Footer } = Layout;

const PlayerStats = props => {
  // const [shotData, setShotData] = useState([
  //   {
  //     attempted: 1,
  //     lg_attempted: 3,
  //     lg_made: 1,
  //     lg_x: -237,
  //     lg_y: 8,
  //     made: 1,
  //     x: -237,
  //     y: 8
  //   }
  // ]);
  const [selected, setSelected] = useState({
    selectedId: "201935",
    selectedName: "James Harden"
  });

  // let season = "2020";
  // // let jHarden = "201935";

  // let shotsApi = `https:stats.theseventhman.net/stats/api/v1/players/shots/?&season=${season}&player=${selected.selectedId}`;

  // let player = props.realPlayer;
  // console.log('THIS',player)

  // useEffect(() => {
  //   axios.get(shotsApi).then(response => {
  //     console.log(response.data);
  //     setShotData(response.data);
  //   });
  // }, [shotsApi]);

  // let madeShots = shotData.map(e => {
  //   return { x: e.x, y: e.y, z: e.lg_made };
  // });

  // let filteredMadeShots = madeShots.filter(function(e) {
  //   if (e.z === 0) {
  //     return false; // skip
  //   }
  //   return true;
  // });

  // let missedShots = shotData.map(e => {
  //   return { x: e.x, y: e.y, z: e.lg_attempted - e.lg_made };
  // });

  // let filteredMissedShots = missedShots.filter(function(e) {
  //   if (e.z === 0) {
  //     return false; // skip
  //   }
  //   return true;
  // });

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
                minHeight: 280
              }}
            >
              <ShotChart
                selected={selected}
                
              />
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
