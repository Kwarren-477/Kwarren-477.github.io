// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = ["-", "-", "-"];
let rowB = ["-", "-", "-"];
let rowC = ["-", "-", "-"];


//*track who turn it is*//

let currentTurn = "x";


//*track remaining turns*//
let remainingTurns =9;

//*track game is over*//
let gameOver=false;


//set up blank varibale for player//
let currentPlayer;

//*comparing gameboard sections*//
function compareSpaces(a, b, c,) {
  return ((a == b) && (a == c));
}


//function handle click//

function clickSquare() {

  //check space//
  if ( (this.innerHTML == "") && (!gameOver) ) {
    //set space
    this.innerHTML = currentTurn;
    this.classList.add("clicked");


    //subtracing turns from remaining clicks//
    remainingTurns=remainingTurns-1;
   console.log("Remaining Turns:" + remainingTurns);

    //*update array of rows to player event*//

    if (this.id == "a1") rowA[0] = currentTurn;
    if (this.id == "a2") rowA[1] = currentTurn;
    if (this.id == "a3") rowA[2] = currentTurn;

    if (this.id == "b1") rowB[0] = currentTurn;
    if (this.id == "b2") rowB[1] = currentTurn;
    if (this.id == "b3") rowB[2] = currentTurn;

    if (this.id == "c1") rowC[0] = currentTurn;
    if (this.id == "c2") rowC[1] = currentTurn;
    if (this.id == "c3") rowC[2] = currentTurn;

    //output arrys to concil//

    console.log("Rows:");
    console.log(rowA);
    console.log(rowB);
    console.log(rowC);

    // get a handle on the DOM element to be updated with the outcome
    let gameOutputMsg = document.querySelector("#gameResult");


    // call your function checkGameboard() with the 3 rows
    let winState =
      checkGameboard(rowA, rowB, rowC);

    // test the returned value of the function
    if (winState == "x") {
      gameOutputMsg.innerHTML = "X wins";
      gameOver = true;

    } else if (winState == "o") {
      gameOutputMsg.innerHTML = "O wins";
       gameOver = true;

    } else if ( (winState == "d") && (remainingTurns==0) ) {
      gameOutputMsg.innerHTML = "draw";
       gameOver = true;

    }
    
    //reveal win and draw//
    if (gameOver) {
      console.log("gameOver: " + winState);
      document.querySelector("#gameResult").style.display="block";
    }


    else {
      gameOutputMsg.innerHTML = "unknown";
    }

    //flip turns//

    if (currentTurn == "x") currentTurn = "o";
    else currentTurn = "x";


    console.log("currentTurn: " + currentTurn);

    //update player dom//
    currentPlayer.innerHTML = currentTurn;

  }

}
/*code for the docmuent to finish loading before game can start*/
document.addEventListener("DOMContentLoaded", function () {

  //*All clickable spaces*//
  let allSpaces = document.querySelectorAll(".gamespace");


  //*beginning loop code*//

  for (x = 0; x < allSpaces.length; x++) {
    allSpaces[x].addEventListener("click", clickSquare);
  }

  //*loop with "for-of" through all clickable spaces*//

  for (let eachSpace of allSpaces) {
    eachSpace.addEventListener("click", function () {
      clickSquare();
    })
  }
  //current player Dom element//
  currentPlayer = document.querySelector("#currentPlayer span");
  currentPlayer.innerHTML = currentTurn;

});





function checkGameboard(checkA, checkB, checkC) {
  let resultValue = "d";

  //check for vertical rows path//
  // row 0 test//
  if (compareSpaces(checkA[0], checkB[0], checkC[0])) {
    if (checkA[0] == "x") resultValue = "x";
    else if (checkA[0] == "o") resultValue = "o";
  }
  //row 1 test//
  if (compareSpaces(checkA[1], checkB[1], checkC[1])) {
    if (checkA[1] == "x") resultValue = "x";
    else if (checkA[1] == "o") resultValue = "o";
  }
  //row 2 test//
  if (compareSpaces(checkA[2], checkB[2], checkC[2])) {
    if (checkA[2] == "x") resultValue = "x";
    else if (checkA[2] == "o") resultValue = "o";
  }



  //test for horizontal rows//

  // row A test//
  function compareSpaces(a, b, c) {
    return ((a == b) && (b == c));
  }

  if (compareSpaces(checkA[0], checkA[1], checkA[2])) {
    if (checkA[0] == "x") resultValue = "x";
    else if (checkA[0] == "o") resultValue = "o";
  }

  //row B test//
  if (compareSpaces(checkB[0], checkB[1], checkB[2])) {
    if (checkB[0] == "x") resultValue = "x";
    else if (checkB[0] == "o") resultValue = "o";
  }

  //row C test//
  if (compareSpaces(checkC[0], checkC[1], checkC[2])) {
    if (checkC[0] == "x") resultValue = "x";
    else if (checkC[0] == "o") resultValue = "o";
  }


  //check for digional rows//

  // combo A0,B1,C2//
  if (compareSpaces(checkA[0], checkB[1], checkC[2])) {
    if (checkA[0] == "x") resultValue = "x";
    else if (checkA[0] == "o") resultValue = "o";
  }

  //combo C0,B1,A2//  
  if (compareSpaces(checkC[0], checkB[1], checkA[2])) {
    if (checkC[0] == "x") resultValue = "x";
    else if (checkC[0] == "o") resultValue = "o";
  }

  return resultValue;
}

// **********************************************
// ***** DO NOT EDIT THE CODE BELOW THIS LINE
// **********************************************

/*commet out non usable code

*/