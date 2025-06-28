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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    console.log("You lose! Human choice won this round");
    return humanChoice;
  } else if (
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "rock" && humanChoice === "scissors")
  ) {
    console.log("You lose! Computer choice won this round");
    return computerChoice;
  } else {
    console.log("same choice, 0 points");
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
