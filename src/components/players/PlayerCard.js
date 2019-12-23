import React, { useState, useEffect } from "react";

import Card from "antd/es/card";

import Row from "antd/es/row";
import "antd/es/row/style/css";

import Col from "antd/es/col";
import "antd/es/col/style/css";

import Statistic from "antd/es/statistic";
import "antd/es/statistic/style/css";
import Spin from "antd/es/spin";
import "antd/es/spin/style/css";

import axios from "axios";

import "../PlayerCard.css";

const PlayerCard = props => {
  const [newData, setNewData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  let api = `https://stats.theseventhman.net/stats/api/v1/players/?&season=2020&player=${props.chosen}`;

  useEffect(() => {
    axios.get(api).then(response => {
      setNewData(response.data);
      setIsFetching(false);
    });
  }, [api]);

  return isFetching ? (
    <div className="shot-spinner spinner">
      <Spin size="large" />
    </div>
  ) : (
    <div className="myplayer-main-div">
      <Card>
        {newData.map((stat, key) => {
          return (
            <Row key={key} gutter={16}>
              <h1 className="my-player-name">{stat.player_name}</h1>
              <p>Per Game</p>
              <Col span={8}>
                <Statistic title="Pts" value={stat.points} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="Ast" value={stat.ast} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic
                  title="Reb"
                  value={stat.dreb + stat.oreb}
                  precision={2}
                />
              </Col>
              <Col span={8}>
                <Statistic title="Stl" value={stat.stl} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="TO" value={stat.tov} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="+/-" value={stat.plus_minus} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="FGA" value={stat.fga} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="FGM" value={stat.fgm} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="Games" value={stat.gp} />
              </Col>
              <Col span={8}>
                <Statistic title="FTA" value={stat.fta} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="FTM" value={stat.ftm} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="Minutes" value={stat.mins} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="3PA" value={stat.tpa} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="3PM" value={stat.tpm} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="PF" value={stat.pf} precision={2} />
              </Col>
            </Row>
          );
        })}
      </Card>
    </div>
  );
};

export default PlayerCard;
