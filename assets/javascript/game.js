$(document).ready(function() {
var random_number;
var lost = 0;
var win = 0;
var previous = 0;
})
var resetAndStart = function(){
    $(".crystals").empty();

var images = [
    '../assets/images/yellow.png',
    '../assets/images/blue.png',
    '../assets/images/orange.png',
    '../assets/images/green.png'];

random_result = Math.floor(Math.random() * 101) + 19;
$("#result").html("Random Result: " + random_result);

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": random
            });  
            crystal.css({
                "background-image":"url'" + (images[i]) +"'",
            });

    $(".crystals").append(crystal);
}
$("#previous").html("Total Score: " + previous);

resetAndStart();

$(document).on("click", ".crystal", function () {
  //The game restarts whenever the player wins or loses  
    var num = parseInt($(this).attr('data-random'));
    previous += num;
    
    $("#previous").html(previous);
    console.log(previous);

    if(previous > random_result){
        lost--;
        $("#lost").html("You lost " + lost);
        previous = 0;
        
        resetAndStart();
    }
    else if(previous === random_result){
        win++;
        $("#win").html("You win " + win);
        
        previous = 0;
        resetAndStart();
    }
}
)
