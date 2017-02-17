
var wins = 0;
var losses = 0;
var MAXTRIES = 3;
var rLetter = "";
var attempts = MAXTRIES;
var DEBUG = 0;


//picks a random letter between a and z
function randomLetter() {
    var fuzzy =  Math.floor(Math.random() * 3) +1;
    console.log(fuzzy);
    var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    rLetter= chars.substr( Math.floor(Math.random() * 52), 1);
    if (DEBUG == 1){
      console.log(chars.indexOf(rLetter));
      console.log(rLetter);
    }
    
    document.getElementById("hint").innerHTML="It's near: " +chars[chars.indexOf(rLetter) - fuzzy];
} 

function guessOne(){
  // Get a guess from the player
  var playerGuess = document.getElementById("guess").value;

   if (playerGuess == rLetter){
     wins+=1;
     document.getElementById("message").innerHTML= "Correct! Keep Guessing.";    
     document.getElementById("wins").innerHTML= "Total Wins: " +wins;
     randomLetter();
  } else {
    losses+=1;
    if(attempts==1){   
      document.getElementById("guessbtn").disabled=true;
      document.getElementById("message").innerHTML= "Sorry Game Over! Hit Restart Button";
    } else{
      attempts-=1;
      
      document.getElementById("message").innerHTML= "Nope! You have " + attempts + " left.";    
    }
  }
  document.getElementById("wins").innerHTML= "Total Wins: " +wins;
      document.getElementById("losses").innerHTML= "Total Losses: " +losses;
      if (DEBUG == 1){
        console.log(attempts);
      }
}

document.onsubmit = function(e){
  e.preventDefault();
}

//reset game
function newGame(){
  // losses=0;
  attempts=MAXTRIES;
  if (DEBUG == 1){
    console.log(attempts);
  }
  document.getElementById("wins").innerHTML= "";
  document.getElementById("losses").innerHTML= "";
  document.getElementById("guessbtn").disabled=false;
  randomLetter();
  document.getElementById("message").innerHTML= "Good Luck!";
  document.getElementById("guess").focus();
} 


  
  
  
    


    