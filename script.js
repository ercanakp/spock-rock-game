// Player
const player = document.getElementById("player");
const playerScoreBoard = document.getElementById("player-score");
const playerChoiceBoard = document.getElementById("player-choice");

// Player Pieces
const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

// Computer
const computer = document.getElementById("computer");
const computerScoreBoard = document.getElementById("computer-score");
const computerChoiceBoard = document.getElementById("computer-choice");

// Computer Pieces
const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const resetIcon = document.getElementById("resetIcon");
const resultText = document.getElementById("result-text");

const allIcons = document.querySelectorAll(".far");
const icons = ["rock", "paper", "scissors", "lizard", "spock"];

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerRandomChoice = "";

const choices = {
    rock: { name: "Rock", defeats: ["scissors", "lizard"] },
    paper: { name: "Paper", defeats: ["rock", "spock"] },
    scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
    lizard: { name: "Lizard", defeats: ["paper", "spock"] },
    spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// Set Icon Styles
function setIconStyles(icon) {
    icon.classList.add("selected");
}

// Set Each Players Choice
function setCohice(player, choice) {
    player.textContent = choice;
}

// Reset all Icons styling
function resetAllIcons() {
    allIcons.forEach((icon) => {
        icon.classList.remove("selected");
    });
}

function computerSelection() {
    let randomChoice = Math.floor(Math.random() * 5);
    let selectedIcon = computer.children[randomChoice + 1];
    computerRandomChoice = icons[randomChoice];
    computerChoiceBoard.textContent = "--- " + choices[computerRandomChoice].name;
    selectedIcon.classList.add("selected");

    checkWinnerAndUpdateBoard(playerSelection);
}

// Check Winner
function checkWinnerAndUpdateBoard(playerSelection) {
    if (playerSelection === computerRandomChoice) {
        resultText.textContent = "It's a tie!";
    } else {
        // console.log('defeats : ', choices[player].defeats.indexOf(computerRandomChoice));
        if (choices[playerSelection].defeats.indexOf(computerRandomChoice) > -1) {
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            resultText.textContent = "You Won!";
        } else {
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            resultText.textContent = "You Lost!";
        }
    }
}

// Start a New Game
function startNewGame() {
    resetAllIcons();
    resultText.textContent = "";
    playerScore = 0;
    playerScoreBoard.textContent = playerScore;
    playerChoiceBoard.textContent = "";
    computerScore = 0;
    computerScoreBoard.textContent = computerScore;
    computerChoiceBoard.textContent = "";
}

// Select Player Choice and Styling
function select(choice) {
    // Reset Styles of All Icons
    resetAllIcons();

    playerSelection = choice;

    // Style Selected Icon
    switch (playerSelection) {
        case "rock":
            playerRock.classList.add("selected");
            playerChoiceBoard.textContent = "--- Rock";
            break;
        case "paper":
            playerPaper.classList.add("selected");
            playerChoiceBoard.textContent = "--- Paper";
            break;
        case "scissors":
            playerScissors.classList.add("selected");
            playerChoiceBoard.textContent = "--- Scissors";
            break;
        case "lizard":
            playerLizard.classList.add("selected");
            playerChoiceBoard.textContent = "--- Lizard";
            break;
        case "spock":
            playerSpock.classList.add("selected");
            playerChoiceBoard.textContent = "--- Spock";
            break;
        default:
            break;
    }

    computerSelection();
}

// Restart A New Game
resetIcon.addEventListener("click", startNewGame);