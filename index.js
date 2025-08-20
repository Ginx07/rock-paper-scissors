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

function getComputerChoice() {
    //creating random number to use as selector in choice matching text
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let input = prompt("Enter (r) rock, (s) scissors, (p) paper")

input = input.trim().toLowerCase()

if (input === "r")  {return "rock"}
if (input === "s")  {return"scissors"}
if (input === "p")  {return "paper"}
}

function playRound(humanChoice, computerInt) {
    const names = ["rock", "paper", "scissors"]
    const computerChoice = names[computerInt]

    console.log('You chose: ${humanChoice} and computer chose ${computerChoice}')

    if(humanChoice === computerChoice) {
        console.log("This round is a tie.")
        return 0
    }

    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log("you won this round!")
            return 1
        }
    else
        {
            console.log("you lost this round")
            return 2
        }
}

for (let round = 1; round <= 5; round++) {
    console.log("round ${round}")

    const human = getHumanChoice()
    const pc = getComputerChoice()
    const result = playRound(human, pc)

    if (result === 1) humanScore++
    else if (result === 2) computerScore++

    console.log('You ${humanScore}    Computer: ${computerScore}')
}

console.log('Final Score - You: ${humanScore}, Computer Score ${computerScore}')

if (humanScore > computerScore) {
    console.log("You won the game!")
}
else if (computerScore > humanScore) {
    console.log("You lost the game")
}
else {
    console.log("It's a Tie")
}