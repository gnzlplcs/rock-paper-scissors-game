import React from "react";
import { settings } from "../configs/game";
import "./User.css";

const User = ({ userScore, userSelection, trophyIcon, children }) => {
  return (
    <div className="user-card">
      <h1>{settings.userName}</h1>
      {userScore < settings.winTarget ? (
        <>
          <div className="choice-grid">{children}</div>
          <h3>
            {userSelection === ""
              ? "Pick one!"
              : `Your choice: ${userSelection}`}
          </h3>
        </>
      ) : (
        <>
          <img src={trophyIcon} alt="Trophy" />
          <h3>Victory!</h3>
        </>
      )}
    </div>
  );
};

export default User;
