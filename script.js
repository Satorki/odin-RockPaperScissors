// Paper-0
// Scissors-1
// Rock-2

// //PROMT OF HOW MANY ROUNDS
// let rounds = prompt("How many rounds do you want to play?");

//GLOBAL VARIABLES FOR PSR AND WIN COUNTS
const paperScissorsRock = ["Paper |", "Scissors ܓ", "Rock O"];
let pWinCount = 0;
let cWinCount = 0;

//COMPUTER CHOICE
const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return paperScissorsRock[random];
};

// //PLAYER CHOICE
// const getPlayerSelection = () => {
//   let playerSelection;
//   let bon = 0;
//   do {
//     playerSelection = prompt("Paper(|), Scissors(ܓ) or Rock(O)?:");
//     if (playerSelection.toLocaleLowerCase() == "paper") {
//       bon = 1;
//       playerSelection = paperScissorsRock[0];
//     } else if (playerSelection.toLocaleLowerCase() == "scissors") {
//       bon = 1;
//       playerSelection = paperScissorsRock[1];
//     } else if (playerSelection.toLocaleLowerCase() == "rock") {
//       bon = 1;
//       playerSelection = paperScissorsRock[2];
//     }
//   } while (bon < 1);
//   return playerSelection;
// };

let playerSelection;
let paper = document.querySelector(".Paper");
let scissors = document.querySelector(".Scissors");
let rock = document.querySelector(".Rock");

const getPlayerChoice = () => {
    if (paper) {
      playerSelection = paperScissorsRock[0];
    } else if (playerSelection.toLocaleLowerCase() == "scissors") {
      playerSelection = paperScissorsRock[1];
    } else if (playerSelection.toLocaleLowerCase() == "rock") {
      playerSelection = paperScissorsRock[2];
    }
}

let result = document.querySelector(".gameResult")


paper.addEventListener("click", function(){
  playerSelection = paperScissorsRock[0];
  let computerSelection = getComputerChoice();
  playRound(computerSelection,playerSelection)
  mainGame();
});
scissors.addEventListener("click", function(){
  playerSelection = paperScissorsRock[1];
  let computerSelection = getComputerChoice();
  playRound(computerSelection,playerSelection)
  mainGame();
})
rock.addEventListener("click", function(){
  playerSelection = paperScissorsRock[2];
  let computerSelection = getComputerChoice();
  playRound(computerSelection,playerSelection)
  mainGame();
})

//ONE ROUND
function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    result.textContent = "It is a draw!";
  } else if (
    computerSelection == paperScissorsRock[0] &&
    playerSelection == paperScissorsRock[1]
  ) {
    result.textContent = "Player Wins";
    pWinCount++;
  } else if (
    computerSelection == paperScissorsRock[0] &&
    playerSelection == paperScissorsRock[2]
  ) {
    result.textContent = "Computer Wins";
    cWinCount++;
  } else if (
    computerSelection == paperScissorsRock[1] &&
    playerSelection == paperScissorsRock[0]
  ) {
    result.textContent = "Computer Wins";
    cWinCount++;
  } else if (
    computerSelection == paperScissorsRock[1] &&
    playerSelection == paperScissorsRock[2]
  ) {
    result.textContent = "Player Wins";
    pWinCount++;
  } else if (
    computerSelection == paperScissorsRock[2] &&
    playerSelection == paperScissorsRock[0]
  ) {
    result.textContent = "Player Wins";
    pWinCount++;
  } else {
    result.textContent = "Computer Wins";
    cWinCount++;
  }
}

let pWinCountOut = document.querySelector(".playerPoints");
let cWinCountOut = document.querySelector(".computerPoints");

const mainGame = () => {
  pWinCountOut.textContent = pWinCount.toString();
  cWinCountOut.textContent = cWinCount.toString();

  if (cWinCount == 5) {
    result.textContent = "Computer is Ultimate Winner"
    cWinCount = 0;
    pWinCount = 0;
  } else if (pWinCount == 5) {
    result.textContent = "Player is Ultimate Winner"
    cWinCount = 0;
    pWinCount = 0;
  }
};

// getComputerChoice();
// getPlayerSelection();
// playRound();

// //WHOLE GAME STARTER
// const playGame = () => {
//   for (let i = 0; i < rounds; i++) {
//     let computerSelection = getComputerChoice();
//     let playerSelection = getPlayerSelection();
//     console.log("Computer: " + computerSelection);
//     console.log("Player: " + playerSelection);
//     playRound(computerSelection, playerSelection);
//   }
//   console.log(cWinCount + " " + pWinCount);
//   cWinCount > pWinCount
//     ? console.log("Computer is Ultimate Winner")
//     : cWinCount == pWinCount
//     ? console.log("Draw Game")
//     : cWinCount < pWinCount
//     ? console.log("Player is Ultimate Winner")
//     : console.log("Computer is Ultimate Winner");
// };

// playGame();
