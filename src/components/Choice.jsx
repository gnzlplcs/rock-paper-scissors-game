import React from "react";
import './Choice.css'

const Choice = ({ value, choiceIcon, onClick }) => {
  return (
    <div value={value} onClick={onClick}>
      <img className="choice-icon" src={choiceIcon} alt="Icon" />
    </div>
  );
};

export default Choice;
