import React, {useState, useEffect} from "react";
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "./TeamStats.css";

const TeamStats = () => {

  const [data, setData] = useState([]);

  let api = `https://stats.theseventhman.net/stats/api/v1/teams/advanced/?&season=2020`

  useEffect(() => {
    axios
      .get(api)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
    //   .then(response => {
    //     const date = response.data.date;
    //     console.log(response);
    //     setDate(date);
    //   })
  }, []);

  let off_def_rating = data.map(e => {
     return {name: e.team_abbrev, off_rating: e.off_rating, def_rating: e.def_rating};
  })

  const chartData = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  console.log(off_def_rating)
  return (
    <div className="team-div">
      <div className="second-team-div">
        <h1 className="team-main-heading">Offensive and Defensive Efficiency By Team:</h1>
      </div>
      <LineChart
        className="team-chart"
        width={1500}
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
    </div>
    
  );
};

export default TeamStats;