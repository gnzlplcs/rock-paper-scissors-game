import React from "react";
import "./Score.css";

const Score = ({ score }) => {
  return <h1 className="score">Score: {score}</h1>;
};

export default Score;
