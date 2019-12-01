import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import "./TeamStats.css";

const PossessionDefense = (props) => {


  let poss_defense = props.possessionData.map(e => {
     return {name: e.team_abbrev, steals: e.stl, blocks: e.blk};
  })

//   console.log(off_def_rating)
  return (
    <>
      <div className="second-team-div">
        <h1 className="team-main-heading">Defensive Pressure</h1>
        <BarChart
        className="team-chart"
        width={1300}
        height={500}
        data={poss_defense}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis ticks={[0,1,2,3,4,5,6,7,8,9,10,11]} />
      
        <Tooltip />
        <Legend />
        <Bar  dataKey="steals" fill="#8884d8" />
        <Bar  dataKey="blocks" fill="#82ca9d" />
      </BarChart>
      </div>
    
   
    </>
  );
};

export default PossessionDefense;