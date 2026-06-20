function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    let choice;
    if (randomNum === 0) {
        choice = "rock";
    } else if (randomNum === 1) {
        choice = "paper";
    } else {
        choice = "scissors"
    }
    return choice
}

function getHumanChoice() {
    const userInput = prompt("Enter something: ");
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw!")
    } else {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You chose rock, computer chose scissors.");
            console.log("Human wins!");
            humanScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You chose rock, computer chose paper.");
            console.log("Computer wins!");
            computerScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You chose paper, computer chose rock.");
            console.log("Human wins!");
            humanScore += 1
        } else if (humanChoice === "paper" && computerChoice ==="scissors") {
            console.log("You chose paper, computer chose scissors.");
            console.log("Computer wins!")
            computerScore += 1
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You chose scissors, computer chose paper.");
            console.log("Human wins!")
            humanScore += 1
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You chose scissors, computer chose rock.");
            console.log("Computer wins!")
            computerScore += 1
        } 
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    console.log("Your score: " + String(humanScore))
    console.log("Computer's score: " + String(computerScore))
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore < computerScore) {
        console.log("Computer wins!")
    } else {
            console.log("It's a draw.")
    }
}

playGame()