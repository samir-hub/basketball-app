import React from "react";
import {
    BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import "./TeamStats.css";

const PossessionBoxScore = (props) => {


  let poss_box_score = props.possessionData.map(e => {
     return {name: e.team_abbrev, points: e.points, rebounds: e.oreb + e.dreb, assists: e.ast};
  })

//   console.log(off_def_rating)
  return (
    <>
      <div className="second-team-div">
        <h1 className="team-main-heading">Basic Box Score Per 100 Possessions</h1>
        <BarChart
        className="team-chart"
        width={1300}
        height={500}
        data={poss_box_score}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis  ticks={[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="points" fill="#8884d8" />
        <Bar dataKey="rebounds" fill="#82ca9d" />
        <Bar dataKey="assists" fill="#001529" />
      </BarChart>
      </div>
    
   
    </>
  );
};

export default PossessionBoxScore;