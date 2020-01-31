import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from 'antd/es/layout';
import Breadcrumb from 'antd/es/breadcrumb';
import Table from 'antd/es/table'
import 'antd/es/table/style/css'
import FooterComp from "../FooterComp";

const { Content } = Layout;

const PlayerBasicLeaders = () => {
  const [perGamePlayers, setPerGamePlayers] = useState([]);

  let api = `https://stats.theseventhman.net/stats/api/v1/players/`;

  useEffect(() => {
    axios.get(api).then(response => {
      setPerGamePlayers(response.data);
    });
  }, [api]);
  const columns = [
    {
      title: "Player",
      dataIndex: "player_name",
      key: "player_name",
      width: '15%'
    },
    {
      title: "PPG",
      dataIndex: "points",
      key: "points",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.points - b.points,
    },
    {
      title: "RPG",
      dataIndex: "reb",
      key: "reb",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.reb - b.reb,
      
    },
    {
      title: "APG",
      dataIndex: "ast",
      key: "ast",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.ast - b.ast,
      
    },
    {
      title: "MPG",
      dataIndex: "mins",
      key: "mins",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.mins - b.mins,
      
    },
    {
      title: "SPG",
      dataIndex: "stl",
      key: "stl",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.stl - b.stl,
      
    },
    {
      title: "BPG",
      dataIndex: "blk",
      key: "blk",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.blk - b.blk,
      
    },
    {
      title: "+/-",
      dataIndex: "plus_minus",
      key: "plus_minus",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.plus_minus - b.plus_minus,
    },
    {
      title: "TOPG",
      dataIndex: "tov",
      key: "tov",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.tov - b.tov,
    },
  ];

  let formattedData = perGamePlayers.map((e, index) => {
    return {
      key: index,
      player_name: e.player_name,
      points: e.points,
      reb: (e.oreb + e.dreb).toFixed(0),
      ast: e.ast,
      mins: e.mins,
      stl: e.stl, 
      blk: e.blk,
      plus_minus: e.plus_minus,
      tov: e.tov
    };
  });

  const data = formattedData;
    
  return (
    <div className="standings-div">
      <Layout className="standings-layout">
        <Layout style={{ padding: "0 10px 10px" }}>
          <Breadcrumb style={{ margin: "8px 0" }}></Breadcrumb>
          <Content
          className="standings-content"
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Table scroll={{ x: 'calc(400px + 50%)'}} size={"small"} pagination={false} columns={columns} dataSource={data} />
          </Content>
        </Layout>
        <FooterComp/>
      </Layout>
    </div>
  );
};

export default PlayerBasicLeaders;
