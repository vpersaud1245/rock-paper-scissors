// Used to randomize the computer choice
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  let index = getRandomIndex(3);
  let computerChoice = computerChoices[index];
  return computerChoice;
}

// Fomats selection for printing to console
function formatSelectionCapitalCase(selection) {
  formattedSelection =
    selection.charAt(0).toUpperCase() + selection.substr(1).toLowerCase();
  return formattedSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelectionFormatted = formatSelectionCapitalCase(playerSelection);
  computerSelectionFormatted = formatSelectionCapitalCase(computerSelection);
  lossStatement = `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}`;
  winStatement = `You Win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}`;

  const resultDisplay = document.querySelector(".displayResults");

  if (computerSelection == playerSelection) {
    resultDisplay.textContent = "It's a Draw!";
    return "Draw";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      resultDisplay.textContent = lossStatement;
      return "Loss";
    } else if (computerSelection == "scissors") {
      resultDisplay.textContent = winStatement;
      return "Win";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      resultDisplay.textContent = lossStatement;
      return "Loss";
    } else if (computerSelection == "paper") {
      resultDisplay.textContent = winStatement;
      return "Win";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      resultDisplay.textContent = lossStatement;
      return "Loss";
    } else if (computerSelection == "rock") {
      resultDisplay.textContent = winStatement;
      return "Win";
    }
  }
}

function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > playerScore) {
    console.log("You Lose");
  } else {
    console.log("It's a draw.");
  }
}

function playGame() {
  playerScore = 0;
  computerScore = 0;

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

  getWinner(playerScore, computerScore);
}

const playerChoiceBtns = document.querySelectorAll("button");

for (let button of playerChoiceBtns) {
  button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
  });
}
