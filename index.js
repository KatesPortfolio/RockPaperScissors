console.log("Hello world")

function getComputerChoice (){
    let array = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * array.length);

    return array[randomNumber]
}

console.log(getComputerChoice())

function getHumanChoice (){
    const playerChoice = prompt("Write rock, paper, scissors");

    return playerChoice;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;