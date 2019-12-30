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
    
    },
    {
      title: "PPG",
      dataIndex: "points",
      key: "points",
      
    },
  ];

  const data = perGamePlayers;
    
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
