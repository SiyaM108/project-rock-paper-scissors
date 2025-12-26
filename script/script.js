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
