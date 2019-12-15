import React, { useState } from "react";

// import logo from "./tbs_full_logo.png";
import { Link } from "react-router-dom";
// import Icon from "antd/es/icon";
import Icon from 'antd/es/icon';
import 'antd/es/icon/style/css';
import "antd/es/icon/style/css";
import Menu from "antd/es/menu";
import "antd/es/menu/style/css";
import Layout from "antd/es/layout";
import "antd/es/layout/style/css";
import "./MobileNavBar.css";

// const { SubMenu } = Menu;
// const { Header } = Layout;

function MobileNavBar() {
  const [menu, setMenu] = useState({
    current: "mail"
  });

  const handleClick = e => {
    console.log("click ", e);
    setMenu({
      current: e.key
    });
  };

  return (
    <Layout className="m-nav-layout">
      <Menu
        className="nav-menu"
        mode="horizontal"
        theme="light"
        onClick={handleClick}
        selectedKeys={[menu.current]}
        style={{ height: "100%", borderRight: 0, }}
      >
        <Menu.Item className="m-1" key="mail">
          <Link to="/"><Icon style={{ fontSize: '20px' }} type="home" /></Link>
        </Menu.Item>
        <Menu.Item className="m-1" key="player">
          <Link to="/myteam"><Icon  style={{ fontSize: '20px' }} type="user" /></Link>
        </Menu.Item>
        <Menu.Item className="m-1" key="standings">
          <Link to="/standings"><Icon style={{ fontSize: '20px' }} type="profile" /></Link>
        </Menu.Item>
        <Menu.Item className="m-1" key="shot">
          <Link to="/playerstats"><Icon style={{ fontSize: '20px' }} type="dot-chart" /></Link>
        </Menu.Item>
  
        <Menu.Item className="m-1" key="team">
          <Link to="/teamstats"><Icon style={{ fontSize: '20px' }} type="bar-chart" /></Link>
        </Menu.Item>
      </Menu>

      <Layout></Layout>
    </Layout>
  );
}

export default MobileNavBar;
