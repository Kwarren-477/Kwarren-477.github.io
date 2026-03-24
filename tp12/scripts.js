
//weather page functions

let scrollingBox;
let offsetLeftStart;
let scrollLeftStart;
let isMoving;



//function to get remote JSON Data//
async function getData(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw (response.status);
        }
    } catch (error) {
        console.error(error);
    }
}





///Hardware for DOM loading//
document.addEventListener("DOMContentLoaded", function () {
    scrollingBox = document.querySelector("#futureInfo");
    isMoving = false;

    scrollingBox.addEventListener("mousedown", function (e) {
        scrollLeftStart = scrollingBox.scrollLeft;
        offsetLeftStart = e.pageX - scrollingBox.offsetLeft;
        isMoving = true;
    });

    scrollingBox.addEventListener("mouseleave", function (e) {
        isMoving = false;
    });

    scrollingBox.addEventListener("mouseup", function (e) {
        isMoving = false;
    });

    scrollingBox.addEventListener("mousemove", function (e) {
        e.preventDefault();
        if (!isMoving) return;
        scrollingBox.scrollLeft = scrollLeftStart - (e.pageX - offsetLeftStart - scrollingBox.offsetLeft);
    });

let sampleUrl = "https://tordevries.github.io/477/examples/ajax-api-test/current.js";
let sampleOptions={};


// Get Sample Data//
getData(sampleUrl, sampleOptions).then( function (result) {
// code to operate on “result” JSON object
console.log(result.);
});




});
