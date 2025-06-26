console.log("Hello world")

function getComputerChoice (){
    let array = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * array.length);

    return array[randomNumber]
}

console.log(getComputerChoice())
