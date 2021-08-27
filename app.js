// validating the user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('incorrect option')
  }
};

// getting the computer choice
const getComputerChoice = () => {
  let option = Math.floor(Math.random() * 3);
  switch (option) {
    case 0: return 'rock';
    break;
    case 1: return 'paper';
    break;
    default: return 'scissors';
  }
}

// determining who is the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer is the winner!';
    } else {
      return 'The user is the winner!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'The user is the winner!';
    } else {
      return 'The computer is the winner!';
    }
  } else {
    if (computerChoice === 'rock') {
      return 'The computer is th winner!';
    } else {
      return 'The user is the winner!';
    }
  }
}

// let's play
const playGame = () => {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(`The user choice is ${userChoice}, and the computer choice is ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();