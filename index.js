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


let humanScore = 0;
let computerScore = 0;

function getComputerChoice(max) {
    //creating random number to use as selector in choice matching text
    return Math.floor(Math.random() * max);
}

//calling the random function to create a random digit from 0-2
let computerChoice = getComputerChoice(3);

//creating a blank variable to name the computers choice
let choiceName = "";

//converting the numeric value into the corresponding name
switch (computerChoice) {
    case 0:
        choiceName = "rock";
        break;
    case 1:
        choiceName = "paper";
        break;
    case 2:
        choiceName = "scissors";
        break;
}
console.log("Computer chose: ", choiceName);

function getHumanChoice() {
    let userChoice = prompt("Enter you choice rock, paper, or scissors?", "rock");
    console.log("You chose: ", userChoice);

    return userChoice;
}

//making user input lowercase for comparison
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

switch (computerChoice) {
    case 0:
        choiceName = "rock";
        break;
    case 1:
        choiceName = "paper";
        break;
    case 2:
        choiceName = "scissors";
        break;
}

let playerChoice = getHumanChoice();
console.log(playerChoice + "This is the player choice line ");

//Function to determine the winner for the round
function playRound(playerChoice, choiceName) {

    //Determining the winner vs rock
    //Compares the players choice to lowercase so aslong as the spelling is correct, it matches
    if (playerChoice.toLowerCase() === "rock" && choiceName === rock) {
        console.log("This round is a Tie");
        //calling a return of 0 for tie, 1 for win, 2 for loss to tally the game score
        return 0;
    }

    else if (playerChoice.toLowerCase() === "rock" && choiceName === paper) {
        console.log("Paper covers rock, you lost this round...");
        return 2;
    }

    else if (playerChoice.toLowerCase() === "rock" && choiceName === scissors) {
        console.log("Rock smashes scissors, you won this round!");
        return 1;
    }

    //Determining the winner vs paper
    else if (playerChoice.toLowerCase() === "paper" && choiceName === paper) {
        console.log("This round is a Tie");
        return 0;
    }

    else if (playerChoice.toLowerCase() === "paper" && choiceName === rock) {
        console.log("Paper covers rock, you won this round...");
        return 1;
    }

    else if (playerChoice.toLowerCase() === "paper" && choiceName === scissors) {
        console.log("Scissors slices paper, you lost this round!");
        return 2;
    }

    //Determining the winner vs scissors
    else if (playerChoice.toLowerCase() === "scissors" && choiceName === scissors) {
        console.log("This round is a Tie");
        return 0;
    }

    else if (playerChoice.toLowerCase() === "scissors" && choiceName === rock) {
        console.log("Scissors slices through paper, you won this round!");
        return 1;
    }

    else if (playerChoice.toLowerCase() === "scissors" && choiceName === paper) {
        console.log("Rock smashes scissors, you lost this round...");
        return 2;
    }
}

for (let round = 1; round <= 5; round++) {
    const player = getHumanChoice()
    const computer = getComputerChoice()
    const result = playRound(playerChoice, choiceName)

    if (result === 1) humanScore++
    else if (result === 2) computerScore++

    console.log(
        `Round ${round}: You ${result === 1 ? 'win' : result === 2 ? 'lose' : 'tie'}`
    )
}



//console.log(humanScore);
//console.log(computerScore);