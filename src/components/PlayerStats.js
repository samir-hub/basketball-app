import React, { useState, useEffect } from "react";
import "./MyTeam.css";
import axios from "axios";

import Icon from 'antd/es/icon';
// import 'antd/es/icon/style/css';
import Menu from 'antd/es/menu'
// import 'antd/es/menu/style/css'
import Layout from 'antd/es/layout'
// import 'antd/es/layout/style/css'
import Breadcrumb from 'antd/es/breadcrumb'
// import 'antd/es/breadcrumb/style/css'


import ShotChart from "./ShotChart";
import FooterComp from "./FooterComp";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const PlayerStats = props => {
  const [data, setData] = useState([]);
  const [favTeam, setFavTeam] = useState({
    teamId: "1610612745",
    teamName: "HOU"
  });
  const [chosen, setChosen] = useState(201935);

  let api = `https://stats.theseventhman.net/stats/api/v1/players/?&season=2020`;

  useEffect(() => {
    axios.get(api).then(response => {
      setData(response.data);
    });
  }, [api]);

  let myPlayers = data.filter(e => {
    if (e.teams === favTeam.teamName) {
      return e.player_name;
    }
    return null;
  });

  const displayTeams = () => {
    var data = props.teamsAndIds;
    if (data.loading) {
      return <div>Loading players...</div>;
    } else {
      return data.map((team, index) => {
        return (
          <option
            className="fav-team-options"
            key={index}
            value={team.team_name}
          >
            {" "}
            {team.abbreviation}{" "}
          </option>
        );
      });
    }
  };

  return (
    <div>
      <Layout>
        <Layout className="outer-layout">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className="my-player-submenu"
            style={{ background: "#fff" }}
          >
            <form className="select-team-form">
              <div className="field">
                <h1 className="select-title">Select a Team:</h1>
                <select
                  onChange={e => setFavTeam({ teamName: e.target.value })}
                >
                  <option className="fav-team-placeholder">HOU</option>
                  {displayTeams()}
                </select>
              </div>
            </form>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    Players
                  </span>
                }
              >
                {myPlayers.map((player, key) => {
                  return (
                    <Menu.Item
                      className="my-player-names"
                      key={key}
                      onClick={() => setChosen(player.player_id)}
                    >
                      {player.player_name}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="layout-around-card" style={{ padding: "0 10px 10px" }}>
            <Breadcrumb style={{ margin: "8px 0" }}></Breadcrumb>
            <Content
            
              style={{
                background: "#fff",
                padding: 10,
                margin: 0,
                minHeight: 280,
                minWidth: 300, 
              }}
            >
              <ShotChart chosen={chosen} />
            </Content>
          </Layout>
        </Layout>
        <FooterComp/>
      </Layout>
    </div>
  );
};

export default PlayerStats;
