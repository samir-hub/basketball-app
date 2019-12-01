import React, { useState } from "react";
import "./NavBar.css";
// import logo from "./tbs_full_logo.png";
import { Link } from "react-router-dom";
import { Menu, Icon, Layout } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;
// const { Header } = Layout;

function NavBar() {
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
    //   <Layout>
    //   <Header>
    //   <img src={logo} alt="Pic"/>

    //   <Menu theme="dark" onClick={handleClick} selectedKeys={[menu.current]} mode="horizontal">
    //   <Menu.Item key="mail">
    //     <Link to="/">
    //         Home
    //       </Link>
    //   </Menu.Item>

    //   <Menu.Item key="alipay">
    //   <Link to="/myteam">
    //         My Team
    //       </Link>
    //   </Menu.Item>
    //   <SubMenu
    //     title={
    //       <span className="submenu-title-wrapper">
    //         <Icon type="user" />
    //         Players
    //       </span>
    //     }
    //   >
    //     <Menu.ItemGroup title="Player Stats">
    //       <Menu.Item key="setting:1"><Link to="/playerstats">Shot Charts</Link></Menu.Item>
    //       <Menu.Item key="setting:2">Per Possession Stats</Menu.Item>
    //       <Menu.Item key="setting:2">Per Game Stats</Menu.Item>
    //       <Menu.Item key="setting:2">Season Leaders</Menu.Item>
    //     </Menu.ItemGroup>
    //   </SubMenu>
    //   <SubMenu
    //     title={
    //       <span className="submenu-title-wrapper">
    //         <Icon type="team" />
    //         Teams
    //       </span>
    //     }
    //   >

    //     <Menu.ItemGroup title="Team Stats">
    //       <Menu.Item key="setting:3"><Link to="/teamstats">
    //         Team Comparisons
    //       </Link></Menu.Item>
    //       <Menu.Item key="setting:4">Per Possession Stats</Menu.Item>
    //       <Menu.Item key="setting:2">Season Leaders</Menu.Item>
    //     </Menu.ItemGroup>
    //   </SubMenu>

    // </Menu>

    // </Header>
    // </Layout>
    <Layout className="nav-layout">
        <Menu
        className="nav-menu"
        mode="horizontal"
          theme="dark"
          onClick={handleClick}
          selectedKeys={[menu.current]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="mail">
            <Link to="/">Home</Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="user" />
                Players
              </span>
            }
          >
            <Menu.ItemGroup title="Player Stats">
              <Menu.Item key="setting:1">
                <Link to="/playerstats">Shot Charts</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to="/myteam">Per Game Stats</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="team" />
                Teams
              </span>
            }
          >
            <Menu.ItemGroup title="Team Stats">
            <Menu.Item key="setting:3">
                <Link to="/standings">Standings</Link>
              </Menu.Item>
              <Menu.Item key="setting:4">
                <Link to="/teamstats">Team Comparisons</Link>
              </Menu.Item>
              {/* <Menu.Item key="setting:4">Per Possession Stats</Menu.Item>
              <Menu.Item key="setting:2">Season Leaders</Menu.Item> */}
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
     
      <Layout></Layout>
    </Layout>
  );
}

export default NavBar;
