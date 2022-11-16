const options = ["Rock", "Paper", "Scissors"];
const win = "You Win!";
const lost = "You Lost!";

function getPlayerChoice() {
  const playerInput = prompt("Rock, Paper, Scissors?");
  return playerInput;
}

function getCompChoice() {
  const randomItem = Math.floor(Math.random() * options.length);
  const compPick = options[randomItem];
  return compPick;
}

let npcChoice = getCompChoice();
let playerChoice = getPlayerChoice();
if (playerChoice === npcChoice) {
  console.log("Draw!");
} else {
  switch (playerChoice) {
    case "Rock":
      if (npcChoice === "Scissors") {
        console.log(win);
      } else {
        console.log(lost);
      }
    case "Paper":
      if (npcChoice === "Rock") {
        console.log(win);
      } else {
        console.log(lost);
      }
    case "Scissors":
      if (npcChoice === "Rock") {
        console.log(win);
      } else {
        console.log(lost);
      }
  }
}

// Players pick r, p, s
// answers are comped against each other
// player wins show "You Won msg!"
// Player loses show "You Lose!"
// player display same result show "Draw!"
// Do you what to continue?
