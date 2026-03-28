
//weather page functions

//weather api variables//

const weatherurl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?days=4&q=';
const weathetoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'be6a03c956mshaee959d6d0ade22p1fb573jsna6b7c2d29696',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

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

//update weather in DOM settings
function updateWeather(weatherObject) {
    console.log(weatherObject);

    //Outputting to whole weather consol//
    document.querySelector("#currentTemp span").innerHTML = weatherObject.current.temp_f;
    document.querySelector("#currentStatus").innerHTML = weatherObject.current.condition.text;
    document.querySelector("#currentHumidity span").innerHTML = weatherObject.current.humidity;

    //Output windspeed and direction plus future day with loops//
    let windspeed = weatherObject.current.wind_mph;
    let winddirection = weatherObject.current.wind_dir;
    document.querySelector("#currentWind").innerHTML = windspeed + "mph" + winddirection;
//update future temp//
    let futureDays = document.querySelectorAll(".futureDay");
    for (i = 0; i < futureDays.length; i++) {
        futureDays[i].querySelector(".futureTemp").innerHTML = weatherObject.forecast.forecastday[i].day.maxtemp_f;
    }
//update windspeed//
    windspeed = weatherObject.forecast.forecastday[i].day.maxwind_mph;
    futureDays[i].querySelector(".futureWind").innerHTML = windspeed + "mph";
    //update futurestatus//
    futureDays[i].querySelector(".futureStatus").innerHTML = weatherObject.forecast.forecastday[i].day.condition.text;

}

//ip lookup code// 
let ipLookupURL = "https://api.ipify.org/?format=json";
let ipLookupOptions = {};

//use Ajax for data collection//
getData(ipLookupURL, ipLookupOptions).then(function(result){

    //adding proper ip number to weather URL//

     let weatherLookupURL = weatherurl + result.ip;
     console.log(weatherLookupURL);

    //use resulting ip number to look up data//
    getData(weatherLookupURL, weathetoptions).then(function(weatherResult){
        console.log(weatherResult);
        updateWeather(weatherResult);

});







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

    

    });




});
