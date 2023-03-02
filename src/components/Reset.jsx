import React from "react";
import { settings } from "../configs/game";
import "./Reset.css";

const Reset = ({ onClick, userSelection, userScore, pcScore }) => {
  return (
    userSelection !== "" && (
      <div onClick={onClick} className="reset-btn">
        <h3>
          {userScore === settings.winTarget || pcScore === settings.winTarget
            ? "Play again"
            : "Reset"}
        </h3>
      </div>
    )
  );
};

export default Reset;
