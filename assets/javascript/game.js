

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var userGuess;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = [];

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var psychicLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if (userGuess === psychicLetter) {
        wins++;
        yourGuesses.length = 0;
        guessesLeft = 10;
        alert("YOU WON!!");
    } 

    else if (guessesLeft === 0){
        losses++;
        yourGuesses.length = 0;
        guessesLeft = 10;
        alert("You lost. Try again.");
       
    }
    else if (userGuess !== psychicLetter){
        guessesLeft--;
        yourGuesses.push(userGuess);
    } 


var html =
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + yourGuesses + "</p>";

document.querySelector("#game").innerHTML = html;
}


