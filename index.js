console.log("Hello world");

function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * array.length);

  return array[randomNumber];
}

function getHumanChoice() {
  const playerChoice = prompt("Write rock, paper, scissors");
  return playerChoice;
}

}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const player = playRound(humanSelection, computerSelection);

    if(player === humanSelection){
      humanScore++
    } else if (player === computerSelection){
      computerScore++
    }
  }
  console.log(`Human ${humanScore} Computer ${computerScore}`);
}
playGame();
