var guessCount = 0;
var wins = 0;
var losses = 9;
var MAX_GUESSES = 3;
var rLetter = "";


//picks a random letter between a and z
function randomLetter() {
    var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    rLetter= chars.substr( Math.floor(Math.random() * 52), 1);
    console.log(rLetter);
} 

function guessOne(){
 
  // Get a guess from the player
  var playerGuess = document.getElementById("guess").value;

   if (playerGuess == rLetter){
     wins+=1;
     document.getElementById("message").innerHTML= "Correct!";    
     document.getElementById("wins").innerHTML= "Total Wins: " +wins;
     randomLetter();
  } else {
    losses-=1;
    if(losses==0){
      losses=9;
      document.getElementById("guessbtn").disabled=true;
      document.getElementById("message").innerHTML= "Sorry Game Over! Hit Restart Button";
    } else{
      document.getElementById("message").innerHTML= "Nope! You have " + losses + " chances left.";
    }
    document.getElementById("losses").innerHTML= "Total Losses: " +losses;
  }
}

function newGame(){
  document.getElementById("guessbtn").disabled=false;
  randomLetter();
  document.getElementById("message").innerHTML= "Good Luck!";
  document.getElementById("guess").focus();
} 


  
  
  
    


    