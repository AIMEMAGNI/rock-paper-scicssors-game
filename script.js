function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

var playerSelections = [];  // Array to store player's choices

function selectChoice(choice) {
    playerSelections.push(choice);
    if (playerSelections.length === 5) {
        game();  // Call the game function after the player selects choices for all five rounds
    }
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
        var result = playRound(playerSelections[count], computerSelection);
        displayResult(result);
    }

    
    if (computerScore === 5) {
        displayResult("You lost the game!");
    } else {
        displayResult("You won the game!");
    }
}

function displayResult(result) {
    var resultTextbox = document.getElementById("result-textbox");
    resultTextbox.value += result + "\n";
}
