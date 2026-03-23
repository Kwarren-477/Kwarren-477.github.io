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

        // get the class of each card as a string//
        let card1 = allClickedCards[0].classList.toString();
        let card2 = allClickedCards[1].classList.toString();
        let card3 = allClickedCards[2].classList.toString();
        let card4 = allClickedCards[3].classList.toString();
        let card5 = allClickedCards[4].classList.toString();
        let card6 = allClickedCards[5].classList.toString();
        let card7 = allClickedCards[6].classList.toString();
        let card8 = allClickedCards[7].classList.toString();
        let card9 = allClickedCards[8].classList.toString();
        let card10 = allClickedCards[9].classList.toString();
        let card11 = allClickedCards[10].classList.toString();
        let card12 = allClickedCards[11].classList.toString();
        let card13 = allClickedCards[12].classList.toString();
        let card14 = allClickedCards[13].classList.toString();
        let card15 = allClickedCards[14].classList.toString();
        let card16 = allClickedCards[15].classList.toString();
      
        // if the class match--it's a pair//
        if (card1 == card2) {
            console.log("it's a match!");
            allClickedCards[0].classList.add("matched");
            allClickedCards[1].classList.add("matched");
            allClickedCards[0].classList.remove("clicked");
            allClickedCards[1].classList.remove("clicked");
        } else {
            console.log("not a match!");
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