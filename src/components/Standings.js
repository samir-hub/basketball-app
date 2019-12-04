import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from 'antd/es/layout'

import Breadcrumb from 'antd/es/breadcrumb'


import "./Standings.css";
import EasternStandings from "./EasternStandings";
import WesternStandings from "./WesternStandings";
import FooterComp from "./FooterComp";


const { Content } = Layout;

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);

  let api = `https://stats.theseventhman.net/stats/api/v1/teams/?&season=2020`;

  useEffect(() => {
    axios.get(api).then(response => {
      setStandingsData(response.data);
    });
  }, [api]);

  let eastern_conf = standingsData.filter(e => {
    if (
      e.team === "MIL" ||
      e.team === "TOR" ||
      e.team === "MIA" ||
      e.team === "BOS" ||
      e.team === "PHI" ||
      e.team === "IND" ||
      e.team === "BKN" ||
      e.team === "CHA" ||
      e.team === "ORL" ||
      e.team === "WAS" ||
      e.team === "DET" ||
      e.team === "CHI" ||
      e.team === "CLE" ||
      e.team === "ATL" ||
      e.team === "NYK"
    )
      return {
        name: e.team_abbrev,
        off_rating: e.off_rating,
        def_rating: e.def_rating
      };
      return null;
  });

  let western_conf = standingsData.filter(e => {
    if (
      e.team === "LAL" ||
      e.team === "DEN" ||
      e.team === "LAC" ||
      e.team === "DAL" ||
      e.team === "HOU" ||
      e.team === "UTA" ||
      e.team === "MIN" ||
      e.team === "PHX" ||
      e.team === "SAC" ||
      e.team === "POR" ||
      e.team === "OKC" ||
      e.team === "SAS" ||
      e.team === "NOP" ||
      e.team === "MEM" ||
      e.team === "GSW"
    )
      return {
        name: e.team_abbrev,
        off_rating: e.off_rating,
        def_rating: e.def_rating
      };
      return null;
  });

  console.log(eastern_conf);
  console.log(western_conf);
  return (
    <div className="standings-div">
      <Layout className="standings-layout">
        <Layout style={{ padding: "0 24px 24px" }}>
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
            <EasternStandings  eastern_conf={eastern_conf} />
            <WesternStandings western_conf={western_conf} />
        
          </Content>
        </Layout>
        <FooterComp/>
      </Layout>
    </div>
  );
};

export default Standings;
