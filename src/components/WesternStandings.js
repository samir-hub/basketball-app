import React from "react";

import Table from 'antd/es/table'
// import "./TeamStats.css";

const WesternStandings = props => {
  let pctNumbers = props.western_conf.map(e => {
    return e.wins - (e.gp-e.wins);
  });

  let arr = Object.values(pctNumbers);

  let max = Math.max(...arr);

  let formattedWestern = props.western_conf.map((e, index) => {
    return {
      key: index,
      team: e.team,
      wins: e.wins,
      losses: e.gp - e.wins,
      gb: (max-(e.wins - (e.gp-e.wins)))/2,
      pct: (e.wins / e.gp).toFixed(3),
      ppg: e.points,
      oppg: e.points_against,
      diff: (e.points - e.points_against).toFixed(1)
    };
  });

  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const teamA = a.pct;
    const teamB = b.pct;

    let comparison = 0;
    if (teamA > teamB) {
      comparison = 1;
    } else if (teamA < teamB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  let sortedData = formattedWestern.sort(compare);

  let addPos = sortedData.map((e, index)=> {
    e.pos = index + 1;
    return e; 
  })

  const columns = [
    {
      title: "POS",
      dataIndex: "pos",
      key: "pos",
     
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
   
    },
    {
      title: "W",
      dataIndex: "wins",
      key: "wins"
    },
    {
      title: "L",
      dataIndex: "losses",
      key: "losses"
    },
    {
      title: "GB",
      dataIndex: "gb",
      key: "gb",
    },
    {
      title: "PCT",
      dataIndex: "pct",
      key: "pct"
    },
    {
      title: "PPG",
      dataIndex: "ppg",
      key: "ppg"
    },
    {
      title: "OPPG",
      dataIndex: "oppg",
      key: "oppg"
    },
    {
      title: "DIFF",
      dataIndex: "diff",
      key: "diff"
    }
  ];

  const data = addPos;

  return (
    <div className="standings-div">
      <div className="second-standings-div">
        <h1 className="standings-main-heading">Western Conference</h1>
        <Table scroll={{ x: 'calc(400px + 50%)'}} size={"small"} pagination={false} columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default WesternStandings;
