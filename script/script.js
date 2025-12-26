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
    let humanChoice = parseInt(prompt("Please enter your choice:\n1: rock\n2: paper\n3:scissors\n"));
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
