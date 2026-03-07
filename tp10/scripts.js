// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = [ "o", "x", "x" ];
let rowB = [ "x", "x", "-" ];
let rowC = [ "x", "o", "o" ];



function compareSpaces (a, b, c,) {
  return ( (a==b) && (a==c) );
}


function checkGameboard(checkA, checkB, checkC) {
 let resultValue= "d";
  
  if  ( compareSpaces ( checkA[0], checkB[0], checkC[0] )  ) {
    
  }
  //check for vertical rows path//
  // row 0 test//
  if ( compareSpaces ( checkA[0], checkB[0], checkC[0] )  ) {
   if (checkA[0]=="x") resultValue="x";
   else if (checkA[0]="o") resultValue ="o";
}
  //row 1 test//
    if ( compareSpaces ( checkA[1], checkB[1], checkC[1] )  ) {
   if (checkA[1]=="x") resultValue="x";
   else if (checkA[1]="o") resultValue ="o";
}
//row 2 test//
     if ( compareSpaces ( checkA[2], checkB[2], checkC[2] )  ) {
   if (checkA[2]=="x") resultValue="x";
   else if (checkA[2]="o") resultValue ="o";
}
  

  
  //test for horizontal rows//
  
 // row A test//
  function compareSpaces (a,b,c) {
  return ( (a==b) && (b==c) );
}

  
  
 if  ( compareSpaces ( checkA[0], checkA[1], checkA[2] )  ) {
    
  }
  
  if ( compareSpaces ( checkA[0], checkA[1], checkA[2] )  ) {
   if (checkA[0]=="x") resultValue="x";
   else if (checkA[0]="o") resultValue ="o";
}


 
  //row B test//
  

  
 if  ( compareSpaces ( checkB[0], checkB[1], checkB[2] )  ) {
    
  }
  
  if ( compareSpaces ( checkB[0], checkB[1], checkB[2] )  ) {
   if (checkB[0]=="x") resultValue="x";
   else if (checkB[0]="o") resultValue ="o";
}


  
  //row C test//


  
 if  ( compareSpaces ( checkC[0], checkC[1], checkC[2] )  ) {
    
  }
  
  if ( compareSpaces ( checkC[0], checkC[1], checkC[2] )  ) {
   if (checkC[0]=="x") resultValue="x";
   else if (checkC[0]="o") resultValue ="o";
}


//check for digional rows//
 
// combo A0,B1,C2//
  
if  ( compareSpaces ( checkA[0], checkB[1], checkC[2] )  ) {
    
  }
  
  if ( compareSpaces ( checkA[0], checkB[1], checkC[2] )  ) {
   if (checkA[0]=="x") resultValue="x";
   else if (checkA[0]="o") resultValue ="o";
}

//combo C0,B1,A2//  
  if  ( compareSpaces ( checkC[0], checkB[1], checkA[2] )  ) {
    
  }
  
  if ( compareSpaces ( checkC[0], checkB[1], checkA[2] )  ) {
   if (checkC[0]=="x") resultValue="x";
   else if (checkC[0]="o") resultValue ="o";
}
  
 return resultValue; 
}

// **********************************************
// ***** DO NOT EDIT THE CODE BELOW THIS LINE
// **********************************************


// get a handle on the DOM element to be updated with the outcome
let gameOutputMsg = document.querySelector("#gameResult span");


// call your function checkGameboard() with the 3 rows
let winState = 
    checkGameboard(rowA, rowB, rowC);

// test the returned value of the function
if (winState == "x") { 
  gameOutputMsg.innerHTML = "X wins";
  
} else if (winState == "o") {
  gameOutputMsg.innerHTML = "O wins";
  
} else if (winState == "d") {
  gameOutputMsg.innerHTML = "draw";
  
} else {
  gameOutputMsg.innerHTML = "unknown";
}
