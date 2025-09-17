/*
CREATE function getComputerChoice 
RETURN: rock, paper, or scissors using integers 
CREATE random number generator 
MAKE getHumanChoice to convert user input of r,p,s into an int 
INITIALIZE humanScore and computerScore to 0 
CREATE playRound(humanChoice, computerChoice) 
MAKE humanChoice case-insensitive 
INCREMENT score based on round winner 
SET round limit to 5 in 
CREATE playGame with playRound inside 
*/


let playerScore = 0;
let computerScore = 0;
let computerChoice = "";

function getComputerChoice() {
    //creating random number to use as selector in choice matching text
    return Math.floor(Math.random() * 3);
}

function playRound(humanChoice, computerInt) {
    const names = ["rock", "paper", "scissors"]
    const computerChoice = names[getComputerChoice()]

    let result = "";

    if (humanChoice === computerChoice) {
        result = "This round is a tie."
    }
    else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        result = "You win this round!";
        playerScore++;
    }
    else {
        result = "Computer wins this round!";
        computerScore++;
    }

    let resultsDiv = document.querySelector("#results")
    resultsDiv.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}.
                            ${result} Score: You ${playerScore} - Computer ${computerScore}`;
}

//linking buttons with js
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));


//adding listeners
//match playRound

