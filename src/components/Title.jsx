import React from "react";
import { settings } from "../configs/game";
import "./Title.css";

const Title = () => {
  return <h1 className="title">{settings.gameName}</h1>;
};

export default Title;
