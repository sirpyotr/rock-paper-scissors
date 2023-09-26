let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
	let n = Math.floor(Math.random() * 3);
	switch (n) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function play(e) {
	let playerSelection = e.target.id
	console.log(playerSelection)
	let computerSelection = getComputerChoice();
	console.log(computerSelection)
	if (playerSelection === computerSelection) {
		console.log('Tie');
		return "Tie!";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		console.log('Win')
		return "Win!";
	} else {
		console.log('lose')
		return "Lose!...";
	}
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', play));

function updateScore() {
	score = playerScore + " : " + computerScore;
}

let score = playerScore + " : " + computerScore;

// eslint-disable-next-line no-unused-vars
function game(rounds) {
	for (let i = 1; i < rounds; i++) {
		if (play() === "Win!") {
			playerScore++;
			updateScore();
			console.log("Win");
			console.log(score);
		} else if (play() === "Lose!...") {
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