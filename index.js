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

function getComputerChoice(max){
    //creating random number to use as selector in choice matching text
    return Math.floor(Math.random() * max);

}

//calling the random function to create a random digit from 0-2
let computerChoice = getComputerChoice(3);
console.log(computerChoice);

//creating a blank variable to name the computers choice
let choiceName = "";

//converting the numeric value into the corresponding name
switch(computerChoice){
    case 0:
        choiceName = "rock";
        break;
    case 1:
        choiceName = "paper";
        break;
    case 3:
        choiceName = "scissors";
        break;
}
console.log(choiceName);