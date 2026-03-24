//js for concertration tp 11//


//track number of turns//
let playerclicks = 0;
let timeDelay = 1000;// 2 seconds


//clear click cards that match//
 function clearClicks (){
    let allClickedCards = document.querySelectorAll(".clicked");
    for (let eachCard of allClickedCards) {
        eachCard.classList.remove("clicked");
    }

//increase player count by 1//
        playerclicks++;
        document.querySelector("#turnCount span").innerHTML = playerclicks;

//check for winning 
let allCards = document.querySelectorAll(".card");
let matchedCards = document.querySelectorAll(".matched");
if (allCards.length == matchedCards.length) {

    //player match all cards
    document.querySelector("#Winning").innerHTML = "You Won!"

}

 }

//new function to flip card when clicked//
function flipCard() {

    if ( !this.classList.contains("matched")) {

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

        

        // get the class of each card as a string//
        let card1 = allClickedCards[0].classList.toString();
        let card2 = allClickedCards[1].classList.toString();
       
        // if the class match--it's a pair//
        if (card1 == card2) {
            console.log("it's a match!");
            allClickedCards[0].classList.add("matched");
            allClickedCards[1].classList.add("matched");
           window.setTimeout(clearClicks, timeDelay);

        } else {
            console.log("not a match!");
            window.setTimeout(clearClicks, timeDelay);

        }
    }
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