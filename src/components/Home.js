import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import westbrook from "./westbrook.jpg";
// import avatar from './tbs_avatar_logo.png';
import { Icon, Card, Alert } from "antd";
import "antd/dist/antd.css";
import FooterComp from "./FooterComp";

const { Meta } = Card;

const Home = () => {

// // Detects if device is on iOS 
// const isIos = () => {
//   const userAgent = window.navigator.userAgent.toLowerCase();
//   return /iphone|ipad|ipod/.test( userAgent );
// }

// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);


  return (
    <>
      <div className="main-div">
        {!isInStandaloneMode() && (<div className="mobile-alert">
          <Alert
            message="For a better experience, open this page in Safari, press the Action menu at the bottom center and press 'Add to Home Screen'. Enjoy!"
            type="warning"
            closable
          />
        </div>)}

        <div className="welcome-div">
          <img className="main-image" src={westbrook} alt="Pic" />
        </div>
        <Card
          className="desktop-home-card"
          style={{ width: 400 }}
          actions={[
            <Link to="/myteam">
              <Icon type="user" key="user" />
            </Link>,
            <Link to="/standings">
              <Icon type="profile" key="profile" />
            </Link>,
            <Link to="/playerstats">
              <Icon type="dot-chart" key="dot-chart" />
            </Link>
          ]}
        >
          <h2 className="cta-heading">Welcome to theballscreen</h2>
          <Meta
            
            // avatar={
            //   <Avatar src={avatar} />
            // }
            title="The site dedicated to live NBA stats"
            description="Check out individual player stats, full league standings or see updated shot charts for any player."
          />
        </Card>

        <Card
          className="mobile-home-card"
          style={{ width: 300 }}
          cover={<img alt="example" src={westbrook} />}
          actions={[
            <Link to="/myteam">
              <Icon type="user" key="user" />
            </Link>,
            <Link to="/standings">
              <Icon type="profile" key="profile" />
            </Link>,
            <Link to="/playerstats">
              <Icon type="dot-chart" key="dot-chart" />
            </Link>
          ]}
        >
          <h2 className="cta-heading">Welcome to theballscreen</h2>
          <Meta
            title="The site dedicated to live NBA stats"
            description="Check out individual player stats, full league standings or see updated shot charts for any player."
          />
        </Card>
      </div>
      <FooterComp/>
    </>
  );
};

export default Home;
