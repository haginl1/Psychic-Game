var guessCount = 0;
var wins = 0;
var losses = 0;
var MAX_GUESSES = 3;
var rLetter = randomLetter()
var chances = MAX_GUESSES-1;


function randomLetter() {
    var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    return chars.substr( Math.floor(Math.random() * 52), 1);
} //picks a random letter between a and z

function guessOne(){
  // Get a guess from the player
  var playerGuess = document.getElementById("guess").value;

  if (playerGuess == randomLetter){
    document.getElementById("message").innerHTML= "It took you " +guessCount+ " guesses";
    wins += 1;
    return;  // prevents saying 'ran out' if guessed in last round
  } else if (playerGuess != randomLetter){
    document.getElementById("message").innerHTML= "Nope! Guess again.";
    document.getElementById("chances").innerHTML= "You have " +chances+ " guesses remaining";
  } 
  losses +=1;
  document.getElementById("losses").innerHTML= "Losses: " +losses;
  wins +=1;
  document.getElementById("wins").innerHTML= "Wins: " +wins;
  guessCount += 1;

  if (guessCount >= MAX_GUESSES) {
    document.getElementById("message").innerHTML= "Sorry, you ran out of guesses.  The mystery letter was " + rLetter;
  }

  // Lend a hand by clearing out their last guess
  document.getElementById("guess").value = "";
    
}  