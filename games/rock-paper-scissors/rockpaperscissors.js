// DOM declarations
playerDisplay = document.getElementById("playerDisplay");
computerDisplay = document.getElementById("computerDisplay");
playerScoreDisplay = document.getElementById("playerScoreDisplay");
computerScoreDisplay = document.getElementById("computerScoreDisplay");
finalResult = document.getElementById("finalResult");

// Get all game buttons
const gameButtons = document.querySelectorAll('.choices button');

// Declare the player and computer's score
let humanScore = 0;
let computerScore = 0;

// Computer's choice
function getComputerChoice() {
    let rand = Math.random();

    if (rand <= 0.33) {
        return "rock";
    } else if (rand <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Disable game buttons
function disableGameButtons() {
    gameButtons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
        button.style.opacity = '0.5';
    });
}

// Enable game buttons
function enableGameButtons() {
    gameButtons.forEach(button => {
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.opacity = '1';
    });
}

// Reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    playerDisplay.textContent = 'PLAYER: ';
    computerDisplay.textContent = 'COMPUTER: ';
    finalResult.textContent = 'BEST TO 5 WINS!';
    
    // Remove replay button
    const replayButton = document.getElementById('replayButton');
    if (replayButton) {
        replayButton.remove();
    }
    
    enableGameButtons();
}

// Function for one round
function playRound(humanChoice) {
    let result = '';
    const computerChoice = getComputerChoice();
    
    console.log("You chose: ", humanChoice)
    console.log("CPU chose: ", computerChoice)

    if (humanChoice === computerChoice) {
        result = "It's a draw!"
    } else {
        switch(humanChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "You Lose..";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "You Lose..";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "You Lose..";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${humanChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    finalResult.textContent = `${result}`

    switch(result) {
        case "YOU WIN!":
            humanScore++;
            playerScoreDisplay.textContent = `${humanScore}`;
            break;
        case "You Lose..":
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            break;
    }

    if (humanScore === 5 || computerScore === 5) {
        const winner = (humanScore === 5) ? "PLAYER" : "COMPUTER";
        finalResult.textContent = `${winner} WINS THE GAME!`;
        disableGameButtons();
        
        // Create and add replay button
        const replayButton = document.createElement('button');
        replayButton.id = 'replayButton';
        replayButton.textContent = '🔄 Play Again';
        replayButton.onclick = resetGame;
        
        // Insert replay button after finalResult
        finalResult.parentNode.insertBefore(replayButton, finalResult.nextSibling);
    }

    console.log(result);
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
}

// -- Unused -- 

// // Decide how many rounds will be played
// let rounds = prompt("How many rounds do you wanna play?")

// for(let i = 0; i < rounds; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
// }
    

// No need for the below function, the buttons will now serve as the human choice

// function getHumanChoice() {

//     let input = prompt("Rock, Paper, Scissors?")

//     if (input.toLowerCase() === "rock") {
//         return "rock";
//     } else if (input.toLowerCase() === "paper") {
//         return "paper";
//     } else {
//         return "scissors";
//     }
// }

// Play the game!