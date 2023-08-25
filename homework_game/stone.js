const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")

const btn = document.querySelectorAll("#btn");
let player;
let computer;
let result;

btn.forEach(allBtn => allBtn.addEventListener("click", () => {
    player = allBtn.textContent;
    computerTurn();
    playerText.textContent = `Player:   ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

}));
function computerTurn() {
    const random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw ! 🤝🤝";
    }
     else if(computer == "ROCK"){
        return (player == "PAPER") ? "You win   🏆🎖️" : "You Lose ! 😒"
     }
     else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "You win   🏆🎖️" : "You Lose ! 😒"
     }
     else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You win   🏆🎖️" : "You Lose ! 😒"
     }
     else if(computer == "SCISSORS"){
        return (player == "SCISSORS") ? "DRAW 🤝🤝" : "DRAW 🤝🤝"
     }
}