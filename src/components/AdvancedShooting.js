import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import "./TeamStats.css";

const AdvancedShooting = (props) => {



  let advanced_shooting = props.advancedData.map(e => {
     return {name: e.team_abbrev, efg_percentage: e.efg_percentage, true_shooting_percentage: e.true_shooting_percentage};
  })

  return (
    <div className="h-scroll">
      <div className="second-team-div">
        <h1 className="team-main-heading">eFG% and TS% by Team</h1>
        <BarChart
        className="team-chart"
        width={1300}
        height={500}
        data={advanced_shooting}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 'dataMax']}  ticks={[0,10,20,30,40,45,50,55,60,65]} />
      
        <Tooltip />
        <Legend />
        <Bar dataKey="efg_percentage" fill="#2f4f4f" />
        <Bar dataKey="true_shooting_percentage" fill="#de733f" />
      </BarChart>
      </div>
    
   
    </div>
  );
};

export default AdvancedShooting;