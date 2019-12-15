import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
} from 'recharts';
import "./TeamStats.css";

const TeamEfficiency = (props) => {



  let off_def_rating = props.advancedData.map(e => {
     return {name: e.team_abbrev, off_rating: e.off_rating, def_rating: e.def_rating};
  })

  return (
    <div className="team-eff-div">
      <div className="second-team-div">
        <h1 className="team-main-heading">Offensive and Defensive Efficiency by Team</h1>
      </div>
     
      <BarChart
        className="team-chart"
        width={1300}
        height={500}
        data={off_def_rating}
        margin={{
          top: 15, right: 30, left: 20, bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip />
        <Legend />
        <Bar  dataKey="off_rating" fill="#2f4f4f"  />
        <Bar  dataKey="def_rating" fill="#de733f" />
      </BarChart>
     
   
    </div>
  );
};

export default TeamEfficiency;