import React, { useState, useEffect } from "react";
import axios from "axios";

import Icon from 'antd/es/icon';
// import 'antd/es/icon/style/css';
import Menu from 'antd/es/menu'
// import 'antd/es/menu/style/css'
import Layout from 'antd/es/layout'
// import 'antd/es/layout/style/css'
import Breadcrumb from 'antd/es/breadcrumb'
// import 'antd/es/breadcrumb/style/css'
import Spin from "antd/es/spin";
import "antd/es/spin/style/css";

import "../TeamStats.css";
import TeamEfficiency from "./TeamEfficiency";
import AdvancedDefense from "./AdvancedDefense";
import FooterComp from "../FooterComp";
import AdvancedShooting from "./AdvancedShooting";
import PossessionBoxScore from "./PossessionBoxScore";
import PossessionShooting from "./PossessionShooting";
import PossessionDefense from "./PossessionDefense";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const TeamStats = () => {
  const [showEff, setShowEff] = useState(true);
  const [showAdvDef, setShowAdvDef] = useState(false);
  const [showAdvShooting, setShowAdvShooting] = useState(false);
  const [showPosBoxScore, setShowPosBoxScore] = useState(false);
  const [showPosShooting, setShowPosShooting] = useState(false);
  const [showPosDef, setShowPosDef] = useState(false);
  const [isAdvancedFetching, setIsAdvancedFetching] = useState(true);
  const [isPossessionFetching, setIsPossessionFetching] = useState(true);

  const [advancedData, setAdvancedData] = useState([]);

  let advancedApi = `https://stats.theseventhman.net/stats/api/v1/teams/advanced/?&season=2020`;

  useEffect(() => {
    axios.get(advancedApi).then(response => {
      setAdvancedData(response.data);
      setIsAdvancedFetching(false);
    });
  }, [advancedApi]);

  const [possessionData, setPossessionData] = useState([]);

  let possessionApi = `https://stats.theseventhman.net/stats/api/v1/teams/possession/?&season=2020`;

  useEffect(() => {
    axios.get(possessionApi).then(response => {
      setPossessionData(response.data);
      setIsPossessionFetching(false);
    });
  }, [possessionApi]);

  return isAdvancedFetching && isPossessionFetching ? (<div className="shot-spinner spinner">
  <Spin size="large" />
</div>) : (
    <div className="team-div">
      <Layout>
        <Layout className="layout-container" >
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className="my-player-submenu"
            style={{ background: "#fff" }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["0"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="rocket" />
                    Advanced Stats
                  </span>
                }
              >
                <Menu.Item
                  className="my-player-names"
                  key="menuitem1"
                  onClick={() => {
                    setShowPosBoxScore(false);
                    setShowEff(true);
                    setShowAdvDef(false);
                    setShowAdvShooting(false);
                    setShowPosDef(false);
                    setShowPosShooting(false);
                  }}
                >
                  Team Efficiency
                </Menu.Item>
                <Menu.Item
                  className="my-player-names"
                  key="menuitem2"
                  onClick={() => {
                    setShowPosBoxScore(false);
                    setShowEff(false);
                    setShowAdvDef(true);
                    setShowAdvShooting(false);
                    setShowPosDef(false);
                    setShowPosShooting(false);
                  }}
                >
                  Defensive Pressure
                </Menu.Item>
                <Menu.Item
                  className="my-player-names"
                  key="menuitem3"
                  onClick={() => {
                    setShowPosBoxScore(false);
                    setShowEff(false);
                    setShowAdvDef(false);
                    setShowAdvShooting(true);
                    setShowPosDef(false);
                    setShowPosShooting(false);
                  }}
                >
                  Advanced Shooting
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="skin" />
                    Per 100 Poss.
                  </span>
                }
              >
                <Menu.Item
                  className="my-player-names"
                  key="menuitem4"
                  onClick={() => {
                    setShowPosBoxScore(true);
                    setShowAdvDef(false);
                    setShowEff(false);
                    setShowAdvShooting(false);
                    setShowPosDef(false);
                    setShowPosShooting(false);
                  }}
                >
                  Basic Box Score
                </Menu.Item>
                <Menu.Item
                  className="my-player-names"
                  key="menuitem5"
                  onClick={() => {
                    setShowEff(false);
                    setShowAdvDef(false);
                    setShowAdvShooting(false);
                    setShowPosBoxScore(false);
                    setShowPosShooting(true);
                    setShowPosDef(false);
                  }}
                >
                  Shooting
                </Menu.Item>
                <Menu.Item
                  className="my-player-names"
                  key="menuitem6"
                  onClick={() => {
                    setShowEff(false);
                    setShowAdvDef(false);
                    setShowAdvShooting(false);
                    setShowPosBoxScore(false);
                    setShowPosShooting(false);
                    setShowPosDef(true);
                  }}
                >
                  Defensive Pressure
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 10px 10px" }}>
            <Breadcrumb style={{ margin: "8px 0" }}></Breadcrumb>
            <Content
            className="chart-container"
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              
              {showEff && <TeamEfficiency advancedData={advancedData} />}
              {showAdvDef && <AdvancedDefense advancedData={advancedData} />}
              {showAdvShooting && (
                <AdvancedShooting advancedData={advancedData} />
              )}
              {showPosBoxScore && (
                <PossessionBoxScore possessionData={possessionData} />
              )}
              {showPosShooting && (
                <PossessionShooting possessionData={possessionData} />
              )}
              {showPosDef && (
                <PossessionDefense possessionData={possessionData} />
              )}
          
            </Content>
          </Layout>
        </Layout>
        <FooterComp/>
      </Layout>
    </div>
  );
};

export default TeamStats;
