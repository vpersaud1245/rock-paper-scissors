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
  const playerSelectionFormatted = formatSelectionCapitalCase(playerSelection);
  const computerSelectionFormatted =
    formatSelectionCapitalCase(computerSelection);
  const lossStatement = `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}`;
  const winStatement = `You Win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}`;

  const resultDisplay = document.querySelector(".displayRoundResults");

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

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function checkForWinner(playerScore, computerScore) {
  if (playerScore == 5) {
    winDisplay.textContent = "You win!";
    resetScore();
  } else if (computerScore == 5) {
    winDisplay.textContent = "You Lose";
    resetScore();
  }
  updateScoreDisplay();
}

function updateScore(result) {
  if (result == "Win") {
    playerScore += 1;
  } else if (result == "Loss") {
    computerScore += 1;
  }
}

const playerChoiceBtns = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const winDisplay = document.querySelector(".displayWin");

let playerScore = 0;
let computerScore = 0;

// When player selects a choice a round will be played and the results displayed
for (let button of playerChoiceBtns) {
  button.addEventListener("click", (e) => {
    console.log("Button Pressed");
    winDisplay.textContent = "";
    let result = playRound(e.target.id, getComputerChoice());

    updateScore(result);
    updateScoreDisplay();

    checkForWinner(playerScore, computerScore);
  });
}

const playerInputs = document.querySelectorAll("input");
for (let input of playerInputs) {
  input.addEventListener("click", (e) => {
    console.log("Button Pressed");
    winDisplay.textContent = "";
    let result = playRound(e.target.id, getComputerChoice());

    updateScore(result);
    updateScoreDisplay();

    checkForWinner(playerScore, computerScore);
  });
}
