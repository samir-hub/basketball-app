import React, { useState, useEffect } from "react";
import "./MyTeam.css";
import axios from "axios";
import { Layout, Menu, Breadcrumb, Icon, Card } from "antd";
import "antd/dist/antd.css";
import PlayerCard from "./PlayerCard";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const MyTeam = props => {
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
  }, []);

  let myPlayers = data.filter(e => {
    if (e.teams === favTeam.teamName) {
      return e.player_name;
    }
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
  

  const handleClick = e => {
    setChosen(e.key);
    console.log(e.key);
  };


  console.log(chosen);

  return (
    <div>
      <form className="select-team-form">
        <div className="field">
          <h1 className="select-title">Select Your Team:</h1>
          <select onChange={e => setFavTeam({ teamName: e.target.value })}>
            <option className="fav-team-placeholder">HOU</option>
            {displayTeams()}
          </select>
        </div>
      </form>

      <Layout>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
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
                    <Menu.Item key={key} onClick={() => setChosen(player.player_id)}>
                      {player.player_name}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "8px 0" }}></Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <PlayerCard myPlayers={myPlayers} chosen={chosen}/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default MyTeam;
