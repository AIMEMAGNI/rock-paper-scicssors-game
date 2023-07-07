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
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Clear previous results

    for (var i = 0; i < playerSelections.length; i++) {
        var computerSelection = getComputerChoice();
        var playerSelection = playerSelections[i];
        var result = playRound(playerSelection, computerSelection);
        displayResult(result, resultContainer);
    }

    playerSelections = []; // Reset player's choices
}

function displayResult(result, container) {
    var resultElement = document.createElement("p");
    resultElement.textContent = result;
    container.appendChild(resultElement);
}
