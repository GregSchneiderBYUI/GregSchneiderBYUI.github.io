let URLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5376890&units=imperial&APPID=9c45d1b3982e5d3d0f88b42909741234";
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", URLstring, true);
weatherRequest.responseType = "text";
weatherRequest.send();

let crwURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5799610&units=imperial&APPID=9c45d1b3982e5d3d0f88b42909741234";
let crwweatherRequest = new XMLHttpRequest();
crwweatherRequest.open("GET", crwURLstring, true);
crwweatherRequest.responseType = "text";
crwweatherRequest.send();

let rexURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&APPID=9c45d1b3982e5d3d0f88b42909741234";
let rexweatherRequest = new XMLHttpRequest();
rexweatherRequest.open("GET", rexURLstring, true);
rexweatherRequest.responseType = "text";
rexweatherRequest.send();

let pccURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=9c45d1b3982e5d3d0f88b42909741234";
let pccweatherRequest = new XMLHttpRequest();
pccweatherRequest.open("GET", pccURLstring, true);
pccweatherRequest.responseType = "text";
pccweatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  document.getElementById("npcurrently").innerHTML =
    weatherData.weather[0].description;
  document.getElementById("nphightemp").innerHTML =
    Math.round(weatherData.main.temp_max) + "&#176;F";
  document.getElementById("nphumidity").innerHTML =
    weatherData.main.humidity + "%";
  document.getElementById("npwindspeed").innerHTML =
    weatherData.wind.speed + " MPH";
};

crwweatherRequest.onload = function() {
  let crwweatherData = JSON.parse(crwweatherRequest.responseText);
  document.getElementById("crwcurrently").innerHTML =
    crwweatherData.weather[0].description;
  document.getElementById("crwhightemp").innerHTML =
    Math.round(crwweatherData.main.temp_max) + "&#176;F";
  document.getElementById("crwhumidity").innerHTML =
    crwweatherData.main.humidity + "%";
  document.getElementById("crwwindspeed").innerHTML =
    crwweatherData.wind.speed + " MPH";
};

rexweatherRequest.onload = function() {
  let rexweatherData = JSON.parse(rexweatherRequest.responseText);
  document.getElementById("rexcurrently").innerHTML =
    rexweatherData.weather[0].description;
  document.getElementById("rexhightemp").innerHTML =
    Math.round(rexweatherData.main.temp_max) + "&#176;F";
  document.getElementById("rexhumidity").innerHTML =
    rexweatherData.main.humidity + "%";
  document.getElementById("rexwindspeed").innerHTML =
    rexweatherData.wind.speed + " MPH";
};

pccweatherRequest.onload = function() {
  let pccweatherData = JSON.parse(pccweatherRequest.responseText);
  document.getElementById("pcccurrently").innerHTML =
    pccweatherData.weather[0].description;
  document.getElementById("pcchightemp").innerHTML =
    Math.round(pccweatherData.main.temp_max) + "&#176;F";
  document.getElementById("pcchumidity").innerHTML =
    pccweatherData.main.humidity + "%";
  document.getElementById("pccwindspeed").innerHTML =
    pccweatherData.wind.speed + " MPH";
};
