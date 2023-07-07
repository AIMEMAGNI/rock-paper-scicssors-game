function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    var playerChoice = prompt("Please make a choice between rock, paper, or scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "You win!";
    }
}

function game() {
    var computerScore = 0;
    var playerScore = 0;
    var count = 0;

    for (count = 0; count < 5; count++) {
        var computerSelection = getComputerChoice();
        var playerSelection = getPlayerChoice();
        var result = playRound(playerSelection, computerSelection);

        if (result === "You win!") {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    if (computerScore === 5) {
        console.log("You lost the game!");
    } else {
        console.log("You won the game!");
    }
}

game();
