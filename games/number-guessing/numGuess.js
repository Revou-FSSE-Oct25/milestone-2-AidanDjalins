// Variables
let randomNumber;
let attemptsLeft;
let guessedNumbers = [];

// Get elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attemptsLeft");
const numbersList = document.getElementById("numbersList");

// Start the game
function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 5;
  guessedNumbers = [];
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  numbersList.innerHTML = "";
  updateAttemptsDisplay();
}

// Update attempts display
function updateAttemptsDisplay() {
  attemptsDisplay.textContent = "Attempts left: " + attemptsLeft;
}

// Update guessed numbers display
function updateGuessedNumbersDisplay() {
  numbersList.innerHTML = "";
  guessedNumbers.forEach((num) => {
    const badge = document.createElement("span");
    badge.className = "number-badge";
    badge.textContent = num;
    numbersList.appendChild(badge);
  });
}

// Check the guess
function checkGuess() {
  const userGuess = Number(guessInput.value);

  // Validate input
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100!";
    message.style.color = "red";
    return;
  }

  // Check if number was already guessed
  if (guessedNumbers.includes(userGuess)) {
    message.textContent =
      "⚠️ You already guessed " + userGuess + "! Try a different number.";
    message.style.color = "purple";
    guessInput.value = "";
    return;
  }

  // Add to guessed numbers
  guessedNumbers.push(userGuess);
  updateGuessedNumbersDisplay();

  attemptsLeft--;

  // Check if guess is correct
  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You won!";
    message.style.color = "green";
    endGame();
  } else if (attemptsLeft === 0) {
    message.textContent = "😞 Game Over! The number was " + randomNumber;
    message.style.color = "red";
    endGame();
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "Too low! Try again.";
    message.style.color = "orange";
  }

  updateAttemptsDisplay();
  guessInput.value = "";
}

// End the game
function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
}

// Event listeners
guessButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", startGame);

// Allow Enter key to submit guess
guessInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Start the game when page loads
startGame();
