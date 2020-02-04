import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import logo from "../components/tbs_avatar_logo.png";
import Icon from "antd/es/icon";
import "antd/es/icon/style/css";
import "./MobileHeader.css";
import Drawer from "antd/es/drawer";
import "antd/es/drawer/style/css";
import Button from "antd/es/button";
import "antd/es/button/style/css";

const MobileHeader = props => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    loading,
    user
  } = useAuth0();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mobile-header">
      {/* {!isAuthenticated && props.location.pathname === "/" && (
        <Icon
          className="login-icon"
          onClick={() => loginWithRedirect({})}
          type="login"
        />
      )} */}
      {!isAuthenticated && (
        <Icon
        className="login-icon"
        onClick={() => loginWithRedirect({})}
        type="login"
      />
      )}
      {isAuthenticated && (
        <img
          onClick={() => showDrawer()}
          className="profile-pic"
          src={user.picture}
          alt="Profile"
        />
      )}
      {props.location.pathname === "/" && (
        <img className="logo-image" src={logo} alt="logo" />
      )}

      {props.location.pathname === "/myteam" && (
        <h1 className="mh-title">Players</h1>
      )}

      {props.location.pathname === "/standings" && (
        <h1 className="mh-title">Standings</h1>
      )}

      {props.location.pathname === "/playerstats" && (
        <h1 className="mh-title">Shot Charts</h1>
      )}

      {props.location.pathname === "/playerleaders" && (
        <h1 className="mh-title">Leaders</h1>
      )}
      {props.location.pathname === "/teamstats" && (
        <h1 className="mh-title">Graphs</h1>
      )}

      <Drawer
        title={isAuthenticated ? `${user.name}` : "nothing"}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
        <p>Option 4</p>
        <Button
          size="large"
          onClick={() => logout()}
          type="primary"
          shape="round"
          icon="logout"
        >
          Log Out
        </Button>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
