import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import "../TeamStats.css";

const AdvancedDefense = (props) => {



  let advanced_defense = props.advancedData.map(e => {
     return {name: e.team_abbrev, opp_efg_percentage: e.opp_efg_percentage, opp_tov_percentage: e.opp_tov_percentage};
  })

  return (
    <div className="h-scroll">
      <div className="second-team-div">
        <h1 className="team-main-heading">Opponent eFG% and Opponent TOV% by Team</h1>
        <BarChart
        className="team-chart"
        width={1300}
        height={500}
        data={advanced_defense}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="opp_efg_percentage" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="opp_tov_percentage" fill="#82ca9d" />
      </BarChart>
      </div>
    
   
    </div>
  );
};

export default AdvancedDefense;