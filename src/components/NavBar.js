import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

function NavBar() {

  const [menu, setMenu] = useState({
    current: 'mail'
  })

  const handleClick = e => {
    console.log('click ', e);
    setMenu({
      current: e.key,
    });
  };


  return (
    <>
    {/* <div className="nav-container">
      <header className="navlinks">
        <Link className="button" to="/">
          Home
        </Link>
        <Link className="button" to="/teamstats">
          Team Stats
        </Link>
        <Link className="button" to="/playerstats">Shot Charts</Link>
        <Link className="button" to="/teamstats">Login</Link>
      </header>
    </div> */}


    <Menu onClick={handleClick} selectedKeys={[menu.current]} mode="horizontal">
    <Menu.Item key="mail">
      <Link to="/">
          Home
        </Link>
    </Menu.Item>

    <Menu.Item key="alipay">
    <Link to="/myteam">
          My Team
        </Link>
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
        <Menu.Item key="setting:1"><Link to="/playerstats">Shot Charts</Link></Menu.Item>
        <Menu.Item key="setting:2">Per Possession Stats</Menu.Item>
        <Menu.Item key="setting:2">Per Game Stats</Menu.Item>
        <Menu.Item key="setting:2">Season Leaders</Menu.Item>
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
        <Menu.Item key="setting:3"><Link to="/teamstats">
          Team Comparisons
        </Link></Menu.Item>
        <Menu.Item key="setting:4">Per Possession Stats</Menu.Item>
        <Menu.Item key="setting:2">Season Leaders</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
  </Menu>
  </>
  );
}

export default NavBar;
