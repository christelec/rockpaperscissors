// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var randomNumber= Math.random();
    
    if(randomNumber > .66) {
        $("#computerChoice").text("rock");
}else if(randomNumber > .33) {
        $("#computerChoice").text("paper");
}else if(randomNumber > .1)
        $("#computerChoice").text("scissors"); {
}
    
    
    
});
