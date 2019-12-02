import React, { useState, useEffect } from "react";
import { Card, Row, Col, Statistic } from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import "./PlayerCard.css";

const PlayerCard = props => {
  const [newData, setNewData] = useState([]);

  let api = `https://stats.theseventhman.net/stats/api/v1/players/?&season=2020&player=${props.chosen}`;

  useEffect(() => {
    axios.get(api).then(response => {
      setNewData(response.data);
    });
  }, [api]);

  console.log(newData);

  return (
    <div className="myplayer-main-div">
      <Card>
        {newData.map((stat,key) => {
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
                <Statistic
                  title="+/-"
                  value={stat.plus_minus}
                  precision={2}
                />
              </Col>
              <Col span={8}>
                <Statistic title="FGA" value={stat.fga} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="FGM" value={stat.fgm} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic
                  title="Games"
                  value={stat.gp}
                  
                />
              </Col>
              <Col span={8}>
                <Statistic title="FTA" value={stat.fta} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="FTM" value={stat.ftm} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic
                  title="Minutes"
                  value={stat.mins}
                  precision={2}
                />
              </Col>
              <Col span={8}>
                <Statistic title="Threes Att" value={stat.tpa} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic title="Threes Made" value={stat.tpm} precision={2} />
              </Col>
              <Col span={8}>
                <Statistic
                  title="Personal Fouls"
                  value={stat.pf}
                  precision={2}
                />
              </Col>
            </Row>
          );
        })}
      </Card>
    </div>
  );
};

export default PlayerCard;
