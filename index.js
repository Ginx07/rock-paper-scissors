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

function playRound(humanChoice) {
    const names = ["rock", "paper", "scissors"]
    const computerChoice = names[getComputerChoice()]

    let result = "";

    //running game until 5 wins
    if (humanChoice === computerChoice) {
        result = "This round is a tie."
    }
    //all of the valid outcomes for player win
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
    if (playerScore === 5 || computerScore === 5) {
        //end game
        //reset score
        document.querySelector("#score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

        //stopping buttons function
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        //setting all values to 0
        let resetBtn = document.querySelector("#play-again");
        resetBtn.style.display = "inline";
        resetBtn.addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;
            document.querySelector("#results").textContent = "";
            document.querySelector("#score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
            resetBtn.style.display = "none";
        
            rockBtn.disabled = false;
            paperBtn.disabled = false;
            scissorsBtn.disabled = false;
        });


    }

    //displaying results on page
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

/*
    -- A fix for simplififying this function, would have to alter playround const to work --
    function getComputerChoice() {
    //creating random number to use as selector in choice matching text

    const names = ["rock", "paper", "scissors"]
    const computerChoice = names[Math.floor(Math.random() * 3)]
    return computerChoice;
} */