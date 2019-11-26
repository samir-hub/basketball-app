import React, {useState} from "react";
// import "./Home.css";

const MyTeam = (props) => {

  const [favTeam, setFavTeam] = useState({
    teamId: "1610612745",
    teamName: "HOU"
  });

  const displayTeams = () => {
    var data = props.teamsAndIds;
    if (data.loading) {
      return <div>Loading players...</div>;
    } else {
      return data.map((team, index) => {
        return (
          <option className="fav-team-options" key={index} value={team.team_id}>
            {" "}
            {team.abbreviation}{" "}
          </option>
        );
      });
    }
  };

  return (
    <div className="my-main-div">
      <h1>My Team</h1>
    </div>
  );
};

export default MyTeam;
