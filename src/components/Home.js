import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import westbrook from "./westbrook.jpg";
// import avatar from './tbs_avatar_logo.png';
// import { Icon, Card, Alert } from "antd";
// import "antd/dist/antd.css";
import Icon from 'antd/es/icon';
import 'antd/es/icon/style/css'
import Card from 'antd/es/card'
import 'antd/es/card/style/css'
import Alert from 'antd/es/alert'
import 'antd/es/alert/style/css'
import 'antd/es/notification/style/css'
import FooterComp from "./FooterComp";
import OfflineNotification from "./OfflineNotification";

const { Meta } = Card;

const Home = () => {

// // Detects if device is on iOS 
// const isIos = () => {
//   const userAgent = window.navigator.userAgent.toLowerCase();
//   return /iphone|ipad|ipod/.test( userAgent );
// }

// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// const openNotificationWithIcon = type => {
//   notification[type]({
//     message: 'Notification Title',
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//   });
// };

  return (
    <>
      <div className="main-div">
      
        <div className="welcome-div">
          <img className="main-image" src={westbrook} alt="Pic" />
        </div>
        <div className="card-div">
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
            title="The site dedicated to live NBA stats."
            description="Check out individual player stats, full league standings or see updated shot charts for any player."
          />
        </Card>
        </div>
        <Card
          className="mobile-home-card"
          style={{ width: 300 }}
          cover={<img alt="example" src={westbrook} />}
        >
          <h2 className="cta-heading">Welcome to theballscreen</h2>
          <Meta
          
            description="Check out individual player stats, full league standings or see updated shot charts for any player."
          />
        </Card>
        <OfflineNotification/>
        {!isInStandaloneMode() && (<div className="mobile-alert">
          <Alert
          style={{ marginBottom: '50px' }}
            message="For a better experience, open this page in Safari, press the Action menu at the bottom center and press 'Add to Home Screen'. Enjoy!"
            type="warning"
            closable
          />
          {/* {openNotificationWithIcon('info')} */}
        </div>)}

      </div>
      <FooterComp/>
    </>
  );
};

export default Home;
