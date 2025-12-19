[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/PAiQDgnZ)

[Live Demo](https://revou-fsse-oct25.github.io/milestone-2-AidanDjalins/)

# Overview

Overview of the progress of the game landing page

## Milestone 2 

The progress made in Milestone 2 covers creating the initial structure of the website.

1. Website is divided into two sections (Home and Games Section)
2. Implemented basic home page design, with navigation buttons, headers, and info cards
3. Added cards that act as placeholders for game links
4. Each game page has it's own "Back to home" button for navigation. Individual components such as game buttons were also styled
5. Created with HTML & CSS
   
## Game Logic - Rock, Paper, Scissors

This section covers explanation of game flow and logic of rock-paper-scissors game.

1. DOM to get elements
2. Declared global variables (player and human score counter)
3. Function to get computer choice (using math random in getComputerChoice() function)
4. playRound() function that takes humanChoice parameter, and switch case between possible outcomes
5. Game is played to best of 5
6. DOM was a used to display score and win or lose text content

## Game Logic - Number Guessing Game

This section covers explanation of game flow and logic of number guessing game.

1. DOM to get elements
2. Declared global variables (random number and attempts left)
3. Input validation to ensure value entered is whole number betweeb 1 and 100
4. Each attempt decrements the attemptLeft counter
5. When number is guessed, guess button is disabled
6. Used text content to display if number is too high and too low, if player wins or loses using respective colors

## Game Logic - Clicker Game

This section covers explanation of game flow and logic of number clicker game.

1. DOM to get elements
2. Declared global variables (score, timer, and gameActive as post)
3. Click button is disable, start button is enabled. gameActive is set to false
4. Game started, start button is disabled, click button enabled. gameActive is set to true. The game starts
5. Time slowly runs down and text will continuously be updated with DOM text content
6. Each click will add value to score, text updated also using DOM
7. When time runs out, the score (click amount) will be displayed. Click button will be disabled, start button enabled. gameActive set to false. 
8. The player can click start to play again
9. Also added cps (clicks per second) display, which takes score value divided by 30, value is fixed to two decimal point (.toFixed(2))