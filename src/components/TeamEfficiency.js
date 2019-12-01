import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
} from 'recharts';
import "./TeamStats.css";

const TeamEfficiency = (props) => {



  let off_def_rating = props.advancedData.map(e => {
     return {name: e.team_abbrev, off_rating: e.off_rating, def_rating: e.def_rating};
  })

  console.log(off_def_rating)
  return (
    <>
      <div className="second-team-div">
        <h1 className="team-main-heading">Offensive and Defensive Efficiency By Team:</h1>
      </div>
     
      <LineChart
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
        <Line type="monotone" dataKey="off_rating" stroke="#2f4f4f" activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="def_rating" stroke="#de733f" activeDot={{ r: 6 }}/>
      </LineChart>
     
   
    </>
  );
};

export default TeamEfficiency;