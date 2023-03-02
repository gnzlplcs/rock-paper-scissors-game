import { useState } from "react";
import Title from "./components/Title";
import Round from "./components/Round";
import Playground from "./components/Playground";
import Profile from "./components/Profile";
import User from "./components/User";
import Choice from "./components/Choice";
import Computer from "./components/Computer";
import Score from "./components/Score";
import Message from "./components/Message";
import Reset from "./components/Reset";
import { settings } from "./configs/game";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import trophy from "./assets/trophy.png";
import "./App.css";

const App = () => {
  const [game, setGame] = useState({
    userSelection: "",
    pcSelection: "",
    round: 0,
    userScore: 0,
    pcScore: 0,
    message: "",
  });

  return (
    <div className="app">
      <Title />
      <Round {...game} />
      <Playground>
        <Profile>
          <User {...game} trophyIcon={trophy}>
            <Choice
              {...game}
              value="Rock"
              onClick={play}
              choiceIcon={rock}
            />
            <Choice
              {...game}
              value="Paper"
              onClick={play}
              choiceIcon={paper}
            />
            <Choice
              {...game}
              value="Scissors"
              onClick={play}
              choiceIcon={scissors}
            />
          </User>
          <Score score={userScore}/>
        </Profile>
        <Message {...game} />
        <Profile>
          <Computer
            {...game}
            rockIcon={rock}
            paperIcon={paper}
            scissorsIcon={scissors}
            trophyIcon={trophy}
          />
          <Score score={pcScore} />
        </Profile>
      </Playground>
      <Reset {...game} onClick={reset}/>
    </div>
  );
};

export default App;
