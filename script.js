// Paper-0 Scissors-1 Rock-2
// 0 win over 2
// 1 win over 0
// 2 win over 1
// tie

const getComputerChoice = () => {
  return Math.floor(Math.random() * 3);
}
console.log(getComputerChoice());
const computerSelection = getComputerChoice();

const playerSelection = parseInt(prompt("Chose a number Paper - 0 Scissors - 1 or Rock - 2"))
console.log(playerSelection);

function playRound(computerSelection, playerSelection) {
    // your code here!
  }
  

console.log(playRound(playerSelection, computerSelection));