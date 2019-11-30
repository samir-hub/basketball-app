import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import westbrook from "./westbrook.jpg";
// import avatar from './tbs_avatar_logo.png';
import { Layout, Icon, Card, Alert } from "antd";
import "antd/dist/antd.css";

const { Footer } = Layout;
const { Meta } = Card;

const Home = () => {
  return (
    <>
      <div className="main-div">
        <div className="mobile-alert">
          <Alert
            message="For a better experience, open this page in Safari, press the icon at the bottom center that looks like a box with an arrow coming out of it and press 'Add to Home Screen'. Enjoy the native app experience!"
            type="warning"
            closable
          />
        </div>

        <div className="welcome-div">
          <img className="main-image" src={westbrook} alt="Pic" />
        </div>
        {/* <div className="cta-div">
          <h1 className="cta-heading">Basketball Stats</h1>
          <h2 className="cta-text">
            Welcome to Basketball Stats. You can check out your favorite team's
            stats or see how your favorite player is faring this season.
          </h2>
        </div> */}
        <Card
          className="desktop-home-card"
          style={{ width: 400 }}
          actions={[
            <Link to="/myteam">
              <Icon type="star" key="star" />
            </Link>,
            <Link to="/playerstats">
              <Icon type="dot-chart" key="dot-chart" />
            </Link>,
            <Link to="/teamstats">
              <Icon type="bar-chart" key="bar-chart" />
            </Link>
          ]}
        >
          <Meta
            className="cta-heading"
            // avatar={
            //   <Avatar src={avatar} />
            // }
            title="Welcome to theballscreen"
            description="Check out in-depth stats for your favorite team, see updated shot charts for any player or compare teams across the league."
          />
        </Card>

        <Card
          className="mobile-home-card"
          style={{ width: 300 }}
          cover={<img alt="example" src={westbrook} />}
          actions={[
            <Link to="/myteam">
              <Icon type="star" key="star" />
            </Link>,
            <Link to="/playerstats">
              <Icon type="dot-chart" key="dot-chart" />
            </Link>,
            <Link to="/teamstats">
              <Icon type="bar-chart" key="bar-chart" />
            </Link>
          ]}
        >
          <Meta
            title="Welcome to theballscreen"
            description="Check out in-depth stats for your favorite team, see updated shot charts for any player or compare teams across the league."
          />
        </Card>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Basketball Stats ©2019 Created by Samir Lilienfeld
      </Footer>
    </>
  );
};

export default Home;
