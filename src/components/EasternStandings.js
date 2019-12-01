import React from "react";
import { Table } from "antd";
import "./Standings.css";

const EasternStandings = props => {
  let formattedEastern = props.eastern_conf.map((e, index) => {
    return {
      key: index,
      team: e.team,
      wins: e.wins,
      losses: e.gp - e.wins,
      pct: ((e.wins / e.gp).toFixed(4)),
      ppg: e.points,
      oppg: e.points_against,
      diff: (e.points - e.points_against).toFixed(1)
    };
  });

  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const teamA = a.wins;
    const teamB = b.wins;

    let comparison = 0;
    if (teamA > teamB) {
      comparison = 1;
    } else if (teamA < teamB) {
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

  return (
    <div className="eastern-standings">
      <div className="second-standings-div">
        <h1 className="standings-main-heading">Eastern Conference</h1>
        <Table pagination={false} columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default EasternStandings;
