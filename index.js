function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    switch(n){
        case 0: 
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissors";
    }
}


function play() {
    playerSelection = prompt("Select: Rock, Paper or Scissors", "Rock").toLowerCase();
    computerSelection = getComputerChoice()
    if(playerSelection === computerSelection) {
        return "Tie!"
    } else if(playerSelection === "rock" && computerSelection === "Scissors" 
    || playerSelection === "paper" && computerSelection === "Rock"
    || playerSelection === "scissors" && computerSelection === "Paper") {
        return "Win!"
    } else {
        return "Lose!..."
    }
}

function updateScore() {
    score = playerScore + " : " + computerScore
}

let playerScore = 0;
let computerScore = 0;
let score = playerScore + " : " + computerScore;

function game(rounds) {
    for(let i = 1; i < rounds; i++){
        if(play() === "Win!") {
            playerScore++;
            updateScore();
            console.log("Win");
            console.log(score);
        } else if(play() === "Lose!...") {
            computerScore++;
            updateScore();
            console.log("Lose");
            console.log(score);
        } else {
            console.log("Tie!");
            updateScore();
            console.log(score);
        }
    }
}