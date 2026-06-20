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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanScore === 5) {
        p.textContent = "You won! yay"
        div.appendChild(p)
    } else {
        if (humanChoice === computerChoice) {
            div.textContent = "Draw!"
        } else {
            if (humanChoice === "rock" && computerChoice === "scissors") {
                div.textContent = "You chose rock, computer chose scissors."
                humanScore += 1;
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                div.textContent = "You chose rock, computer chose paper."
                computerScore += 1;
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                div.textContent = "You chose paper, computer chose rock."
                humanScore += 1
            } else if (humanChoice === "paper" && computerChoice ==="scissors") {
                div.textContent = "You chose paper, computer chose scissors."
                computerScore += 1
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                div.textContent = "You chose scissors, computer chose paper."
                humanScore += 1
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                div.textContent = "You chose scissors, computer chose rock."
                computerScore += 1
            } 
        }
        p.textContent = "Your score: " + String(humanScore)
        div.appendChild(p)
    }
}

const body = document.querySelector("body");

const rock = document.createElement("button");
rock.textContent = "ROCK";
body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER";
body.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS"
body.appendChild(scissors)

body.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let humanSelection = e.target.textContent
        let computerSelection = getComputerChoice()
        playRound(humanSelection.toLowerCase(), computerSelection)
    }
})

const div = document.createElement("div")
div.classList.add("results")
div.textContent = "Choose nowwwwwwwww"

const p = document.createElement("p")
p.textContent = "Your score: " + String(humanScore)
div.appendChild(p)

body.appendChild(div)