console.log("Hello, World!");

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
    let input = prompt("Please enter rock, paper, or scissors: ");
    return input.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        return 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        return 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper");
        return 1;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return -1;
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let rounds = 0;
    while(rounds < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        rounds++;
        if(result === -1) {
            computerScore++;
        }
        else if(result === 1) {
            humanScore++;
        }
    }
    console.log("****************** SCORE *******************");
    console.log("Computer: " + computerScore);
    console.log("Your score: " + humanScore);
    if(computerScore < humanScore) {
        console.log("Well done! Congratulations on your win!");
    }
    else if(computerScore > humanScore) {
        console.log("Better luck next time, good attempt.")
    }
    else {
        console.log("It's a tie, so good job.")
    }
    console.log("********************************************");
}

playGame();
