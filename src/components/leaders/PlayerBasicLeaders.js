import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from 'antd/es/layout';
import Breadcrumb from 'antd/es/breadcrumb';
import FooterComp from "../FooterComp";

const { Content } = Layout;

const PlayerBasicLeaders = () => {
    
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
            Player Leaders
          </Content>
        </Layout>
        <FooterComp/>
      </Layout>
    </div>
  );
};

export default PlayerBasicLeaders;
