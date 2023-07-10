
// I made a player score and a winner score, and this statement is meant to calculate the total points during a game. 
alert("I am an alert box!");
var FirstCategory = "Puzzler";
var player = 25;
var userScore = 60; 
var winnerScore = 60; 

if (userScore > winnerScore || userScore == winnerScore ) {
  console.log( "You won !!!!!!!!!!! ");
} else {
  console.log( "You almost reached the score, but it was under " + winnerScore );
} 







// This function is calculating two numbers together, and it returns the total number. 
function sandwichRounds(Number1, Number2){
  var result = Number1 + Number2; 
  return result; 
  
}


var answer = sandwichRounds(3, 7);
console.log(answer);

var message = "This is a picture of puppeteer Jim Henson and his Muppets. He passed away in 1990 from pneumonia caused by sepsis and strep throat/the flu.";
document.getElementById("Caption").innerHTML= message;

