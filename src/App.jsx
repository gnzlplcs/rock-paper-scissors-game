import { useState } from "react";
import "./App.css";
import { settings } from "./configs/game";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import trophy from "./assets/trophy.png";

const App = () => {
  const [game, setGame] = useState({
    userSelection: "",
    pcSelection: "",
    round: 0,
    userScore: 0,
    pcScore: 0,
    message: "",
  });

  return <div className="app">Rock Paper Scissors Game</div>;
};

export default App;
