function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  let index = getRandomInt(3);
  let computerChoice = computerChoices[index];
  return computerChoice;
}

function formatSelection(selection) {
  formattedSelection =
    selection.charAt(0).toUpperCase() + selection.substr(1).toLowerCase();
  return formattedSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelectionFormatted = formatSelection(playerSelection);
  computerSelectionFormatted = formatSelection(computerSelection);
  lossStatement = `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}`;
  winStatement = `You Win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}`;

  if (computerSelection == playerSelection) {
    console.log("It's a Draw!");
    return "Draw";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      console.log(lossStatement);
      return "Loss";
    } else if (computerSelection == "scissors") {
      console.log(winStatement);
      return "Win";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log(lossStatement);
      return "Loss";
    } else if (computerSelection == "paper") {
      console.log(winStatement);
      return "Win";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      console.log(lossStatement);
      return "Loss";
    } else if (computerSelection == "rock") {
      console.log(winStatement);
      return "Win";
    }
  }
}

playerScore = 0;
computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    computerChoice = getComputerChoice();
    roundResult = playRound(playerChoice, computerChoice);

    if (roundResult == "Win") {
      playerScore += 1;
    } else if (roundResult == "Loss") {
      computerScore += 1;
    }

    console.log(
      `Player Score: ${playerScore} Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > playerScore) {
    console.log("You Lose");
  } else {
    console.log("It's a draw.");
  }
}

game();