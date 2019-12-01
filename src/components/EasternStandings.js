import React from "react";
import { Table } from "antd";
import "./Standings.css";

const EasternStandings = props => {
  let pctNumbers = props.eastern_conf.map(e => {
    return e.wins - (e.gp-e.wins);
  });

  let arr = Object.values(pctNumbers);

  let max = Math.max(...arr);
  let formattedEastern = props.eastern_conf.map((e, index) => {
    return {
      key: index,
      team: e.team,
      wins: e.wins,
      losses: e.gp - e.wins,
      gb: (max-(e.wins - (e.gp-e.wins)))/2,
      pct: ((e.wins / e.gp).toFixed(4)),
      ppg: e.points,
      oppg: e.points_against,
      diff: (e.points - e.points_against).toFixed(1)
    };
  });

  function compare(a, b) {
    const teamA = (a.pct);
    const teamB = (b.pct);


    let comparison = 0;
    if ((teamA) > (teamB)) {
      comparison = 1;
    } else if ((teamA) < (teamB)) {
      comparison = -1;
    }
    return comparison * -1;
  }

  let sortedData = formattedEastern.sort(compare);

  const columns = [
    {
      title: "Team",
      dataIndex: "team",
      key: "team"
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
      key: "gb"
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

  const data = sortedData;

  console.log(formattedEastern)

  return (
    <div className="eastern-standings">
      <div className="second-standings-div">
        <h1 className="standings-main-heading">Eastern Conference</h1>
        <Table size={"small"} pagination={false} columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default EasternStandings;
