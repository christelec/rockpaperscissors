// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var randomNumber= 0;
var userChoice="";
var computerChoice="";
var winner="";



$("#shoot").click(function(){
    randomNumber= Math.random();
    userChoice= $("#input").val();
    console.log(randomNumber);
    
$("#userChoice").text(userChoice);
    
    
    if(randomNumber > .66) {
        $("#computerChoice").text("rock");
}else if(randomNumber > .33) {
        $("#computerChoice").text("paper");
}else {
        $("#computerChoice").text("scissors");
}

 var compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    return "You win!";
                } else {
                    // paper wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    return "You win!";
                } else {
                    // scissors wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock wins
                    return "You lose! Try again.";
                } else {
                    // scissors wins
                    return "You win!";
                }
            }
        };
   
    
    
});
