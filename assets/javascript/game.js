$(document).ready(function () {
    var random_number;
    var lost = 0;
    var win = 0;
    var previous = 0;

    // resets goal number, player score to 0, new crystals
    var resetAndStart = function () {
        // Identify Random Goal Number
        random_result = Math.floor(Math.random() * 101) + 19;
            // update display with that number
        $("#result").html("Random Result: " + random_result);
        // reset user score to 0
        previous = 0;
        // update display with that number
        $("#previous").html("Total Score: " + previous);
        // create crystals
        $(".crystals").empty();

        // store images 
        var images = [
            '../images/yellow.png',
            '../images/blue.png',
            '../images/orange.png',
            '../images/green.png'];
        // loop through each of the 4 crystals
        for (var i = 0; i < 4; i++) { // for each crystal
            // create a random number 
            var random = Math.floor(Math.random() * 11) + 1;
            //console.log(random);
            // create a new crystal
            var crystal = $("<div>");
            // give the new crystal a css class and assign the random number to it
            crystal.attr({
                "class": "crystal",
                "data-random": random
            });
            // give that crystal a background image
            crystal.css({
                "background-image": "url(" + images[i] + ")",
            });
            // add the crystal to the page
            $(".crystals").append(crystal);
        }
    }
    // execute the function we made
    resetAndStart(); 
                    
        // click listener  // User select any combo of 4 crystals that have random values each game  
        $(document).on("click", ".crystal", function () {
            //The game restarts whenever the player wins or loses  
            // Identify the value that was randomly given to the crystal
            var num = parseInt($(this).attr('data-random'));
            // add value to current player score
            previous += num;
            // updating display
            $("#previous").html(previous);
            console.log(previous);
            // if player score is over the goal number:// You lose condition
            if (previous > random_result) {
                // add 1 to losses
                lost++;
                // update display
                $("#loss").html("You lost " + lost);
                previous = 0;
                // reset the game
                resetAndStart();
            }
            // if it equals the goal number // You win condition
            else if (previous === random_result) {
                // add 1 to wins
                win++;
                // update display
                $("#win").html("You win " + win);
                // reset the game
                previous = 0;
                resetAndStart();
            }
        })
})