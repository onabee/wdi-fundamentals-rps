////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == "rock" && computerMove == "scissors") {
        return "player";
    } else if (playerMove == "scissors" && computerMove == "paper") {
        return "player";
    } else if (playerMove == "paper" && computerMove == "rock") {
        return "player";
    } else if (computerMove == "rock" && playerMove == "scissors") {
        return "computer";
    } else if (computerMove == "paper" && playerMove == "rock") {
        return "computer";
    } else if (computerMove == "scissors" && playerMove == "paper") {
        return "computer";
    } else if (playerMove == computerMove) {
        return "tie"; 
    } 
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    if ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log('Player picked' + playerMove + 'Computer picked' + computerMove);
        winner = getWinner(playerMove, computerMove);
        if (winner === 'player') {
            playerWins +=1;
        } else if (winner === 'computer') {
            computerWins +=1;
        } else if (winner === 'tie') {
            playerWins += 0;
            computerWins += 0;
        } console.log('The score is… Player:' + playerWins + 'to Computer:' + computerWins)
    } else 
    return [playerWins, computerWins];
}

