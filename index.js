let playerScore = 0;
let computerScore = 0;

let divScore = document.querySelector(".score");
function updateScoreMessage() {
	divScore.textContent = `Humanity ${playerScore} : Machine ${computerScore}`;
}
updateScoreMessage();

let choices = document.querySelector(".choice");
let result = document.querySelector(".result");
function updateChoiceMessage(player, computer, res) {
	choices.textContent = `${player} : ${computer}`;
	result.textContent = `${res}`;
}

function reset() {
	if(playerScore === 5 || computerScore === 5){
		const winner = (playerScore >= 5) ? 'Humanity' : 'Machine';
		setTimeout(() => { 
			alert(`The winner is: ${winner} `);
			playerScore = 0;
			computerScore = 0;
			choices.textContent = "";
			result.textContent = "";
			updateScoreMessage();
		}, 100)
	}
}


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
	let playerSelection = e.target.id;
	let computerSelection = getComputerChoice();
	if (playerSelection === computerSelection) {
		updateChoiceMessage(playerSelection, computerSelection, "Tie");
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		++playerScore;
		updateScoreMessage();
		updateChoiceMessage(playerSelection, computerSelection, "Win");
		reset();
	} else {
		++computerScore;
		updateScoreMessage();
		updateChoiceMessage(playerSelection, computerSelection, "Lose");
		reset();
	}
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", play));