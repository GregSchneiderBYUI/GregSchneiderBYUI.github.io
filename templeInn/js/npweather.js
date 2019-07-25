let URLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5376890&units=imperial&APPID=9c45d1b3982e5d3d0f88b42909741234';
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', URLstring, true);
weatherRequest.responseType = 'text';
weatherRequest.send();


weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById("currently").innerHTML = weatherData.weather[0].description;
    document.getElementById("hightemp").innerHTML = Math.round(weatherData.main.temp_max) + "&#176;F";
    document.getElementById("humidity").innerHTML = weatherData.main.humidity + "%";
    document.getElementById("windspeed").innerHTML = weatherData.wind.speed + " MPH";
}
