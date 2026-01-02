// Variables
let score = 0;
let timeLeft = 30;
let gameActive = false;
let timerInterval;

// Get elements
const clickButton = document.getElementById("clickButton");
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameOverDisplay = document.getElementById("gameOver");

// Start the game
function startGame() {
  // Reset everything
  score = 0;
  timeLeft = 30;
  gameActive = true;

  // Update displays
  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time: 30s";
  gameOverDisplay.textContent = "";

  // Enable click button
  clickButton.disabled = false;
  startButton.disabled = true;

  // Start countdown timer
  timerInterval = setInterval(updateTimer, 1000);
}

// Update timer
function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = "Time: " + timeLeft + "s";

  // Check if time is up
  if (timeLeft <= 0) {
    endGame();
  }
}

// Handle click on the big button
function handleClick() {
  if (gameActive) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
  }
}

// End the game
function endGame() {
  gameActive = false;
  clearInterval(timerInterval);

  // Disable click button
  clickButton.disabled = true;
  startButton.disabled = false;

  // Show final score
  gameOverDisplay.textContent = "Game Over! Final Score: " + score;

  // Calculate clicks per second
  let cps = (score / 30).toFixed(2);
  gameOverDisplay.textContent += " (" + cps + " clicks/second)";
}

// Event listeners
clickButton.addEventListener("click", handleClick);
startButton.addEventListener("click", startGame);
