var guessCount = 0;
var wins = 0;
var losses = 0;
var chances = 3;
var rLetter = "";


//picks a random letter between a and z
function randomLetter() {
    var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    rLetter= chars.substr( Math.floor(Math.random() * 52), 1);
    document.getElementById("hint").innerHTML="Hint: " +rLetter;
} 

function guessOne(){
 
  // Get a guess from the player
  var playerGuess = document.getElementById("guess").value;
  document.getElementById("wins").innerHTML= "Total Wins: " +wins;
  document.getElementById("losses").innerHTML= "Total Losses: " +losses;
  document.getElementById("chances").innerHTML= "Chances Left: " +chances;

   if (playerGuess == rLetter){
     wins+=1;
     document.getElementById("message").innerHTML= "Correct!";    
     document.getElementById("wins").innerHTML= "Total Wins: " +wins;
     randomLetter();
  } else {
    losses+=1;
    if(losses==3){
      chances-=1;
      document.getElementById("guessbtn").disabled=true;
      document.getElementById("message").innerHTML= "Sorry Game Over! Hit Restart Button";
    } else{
      document.getElementById("message").innerHTML= "Nope! You have " + chances + " left.";
      
    }
    document.getElementById("losses").innerHTML= "Total Losses: " +losses;
  }
}
document.onsubmit = function(e){
e.preventDefault();
}
function newGame(){
  document.getElementById("guessbtn").disabled=false;
  randomLetter();
  document.getElementById("message").innerHTML= "Good Luck!";
  document.getElementById("guess").focus();
} 


  
  
  
    


    