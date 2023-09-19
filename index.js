function getComputerChoice() {
// get a random choice from a list of "Rock, Paper and Scissors"
    let n = Math.floor(Math.random() * 3 + 1);
    if(n===1) {
        return "Rock";
    } else if(n === 2) {
        return "Paper";
    } else if (n === 3) {
        return "Scissors";
    }
}

let playerSelection = prompt("Select: Rock, Paper or Scissors", "Rock");
// get an input from the user from a list of "rock paper scissors"

let computerSelection = getComputerChoice()
// assign variable to computerchoice 

function play(playerSelection, computerSelection) {
// use both selections to determine which is the winner and print out the result
    if(playerSelection === computerSelection) {
        return "Tie!"
    } else if(playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Win!"
    } else {
        return "Lose!..."
    }
}

console.log(play(playerSelection, computerSelection));