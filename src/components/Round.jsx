import React from "react";
import "./Round.css";

const Round = ({ userSelection, round }) => {
  return (
    <h1 className="round">
      {userSelection === "" ? "No rounds yet!" : `Round: ${round}`}
    </h1>
  );
};

export default Round;
