console.log("Hello, World!");

let computerScore = 0;
let humanScore = 0;
let rounds = 0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);  // random number from 1 to 3
    if(choice === 1) {
        return "rock";
    }
    else if(choice === 2) {
        return "paper";
    }
    else if(choice === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("Please enter your choice:\n1: rock\n2: paper\n3: scissors\n"));
        if(humanChoice === 1) {
        return "rock";
    }
    else if(humanChoice === 2) {
        return "paper";
    }
    else if(humanChoice === 3) {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
