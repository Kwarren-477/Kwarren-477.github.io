//js for concertration tp 11//


//new function to flip card when clicked//
function flipCard() {

    //get all click card//
    let allClickedCards = document.querySelectorAll(".clicked");

    //only proceed if there are less then 2 cards click
    if (allClickedCards.length < 2) {

        //add clicked class to clicked card//
        this.classList.add("clicked");

    }

        //get a fresh list of click cards//
        allClickedCards = document.querySelectorAll(".clicked");

        //if it's a pair compare them//
        if (allClickedCards.length == 2) {
            
        }

}







//Run this code when the DOM loads//
document.addEventListener("DOMContentLoaded", function (e) {

    //Handles to game elements//
    let allCards = document.querySelectorAll(".card");
    let gameboard = document.querySelector("#gameboard");

    //Randomize cards by looping //
    for (x = 0; x < allCards.length; x++) {
        let randNum = Math.floor(Math.random() * allCards.length);
        gameboard.insertBefore(allCards[x], gameboard.children[randNum]);

        allCards[x].addEventListener("click", flipCard);

    }


});