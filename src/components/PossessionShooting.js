import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import "./TeamStats.css";

const PossessionShooting = (props) => {


  let poss_shooting = props.possessionData.map(e => {
     return {name: e.team_abbrev, fg_made: e.fgm, fg_missed: (e.fga-e.fgm).toFixed(1), fg_attempted: e.fga, threes_made: e.tpm, threes_missed: (e.tpa-e.tpm).toFixed(1)};
  })

//   console.log(off_def_rating)
  return (
    <div className="h-scroll">
      <div className="second-team-div">
        <h1 className="team-main-heading">FG Made/FG Missed and Threes Made/Threes Missed per 100 Possessions by Team</h1>
        <BarChart
        className="team-chart"
        width={1300}
        height={500}
        data={poss_shooting}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="fg_made" stackId="a" fill="#8884d8" />
        <Bar dataKey="fg_missed" stackId="a" fill="#82ca9d" />
        <Bar dataKey="threes_made" stackId="b" fill="#2f4f4f"  />
        <Bar dataKey="threes_missed" stackId="b" fill="#de733f" />
      </BarChart>
      </div>
    
   
    </div>
  );
};

export default PossessionShooting;