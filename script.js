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

paper.addEventListener("click", function(){
  playerSelection = paperScissorsRock[0];
  console.log(getComputerChoice());
  console.log(playerSelection);
  
});
scissors.addEventListener("click", function(){
  playerSelection = paperScissorsRock[1];
  console.log(getComputerChoice());
  console.log(playerSelection);
  
})
rock.addEventListener("click", function(){
  playerSelection = paperScissorsRock[2];
  console.log(getComputerChoice());
  console.log(playerSelection);
  
})


// //ONE ROUND
// function playRound(computerSelection, playerSelection) {
//   if (computerSelection == playerSelection) {
//     console.log("It is a draw!");
//   } else if (
//     computerSelection == paperScissorsRock[0] &&
//     playerSelection == paperScissorsRock[1]
//   ) {
//     console.log("Player Wins");
//     pWinCount++;
//   } else if (
//     computerSelection == paperScissorsRock[0] &&
//     playerSelection == paperScissorsRock[2]
//   ) {
//     console.log("Computer Wins");
//     cWinCount++;
//   } else if (
//     computerSelection == paperScissorsRock[1] &&
//     playerSelection == paperScissorsRock[0]
//   ) {
//     console.log("Computer Wins");
//     cWinCount++;
//   } else if (
//     computerSelection == paperScissorsRock[1] &&
//     playerSelection == paperScissorsRock[2]
//   ) {
//     console.log("Player Wins");
//     pWinCount++;
//   } else if (
//     computerSelection == paperScissorsRock[2] &&
//     playerSelection == paperScissorsRock[0]
//   ) {
//     console.log("Player Wins");
//     pWinCount++;
//   } else {
//     console.log("Computer Wins");
//     cWinCount++;
//   }
// }

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
