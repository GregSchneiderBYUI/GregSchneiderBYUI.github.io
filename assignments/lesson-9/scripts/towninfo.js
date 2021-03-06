var section = document.querySelector("section");

var pics = [
  "https://gregschneiderbyui.github.io/assignments/lesson-9/images/preston.jpg",
  "https://gregschneiderbyui.github.io/assignments/lesson-9/images/sodasprings.jpg",
  "https://gregschneiderbyui.github.io/assignments/lesson-9/images/fishhaven.jpg"
];

var requestURL =
  "https://gregschneiderbyui.github.io/assignments/lesson-9/json/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();

request.onload = function () {
  var townText = request.response;
  var towns = JSON.parse(townText);
  populateTown(towns, pics);
};

function populateTown(jObj, jPics) {
  var towns = jObj["towns"];

  for (var i = 0; i < towns.length; i++) {
    var articleC = document.createElement("article");
    var h3C = document.createElement("h3");
    var para1C = document.createElement("p");
    var para2C = document.createElement("p");
    var para3C = document.createElement("p");
    var para4C = document.createElement("p");
    //var listC = document.createElement('ul');

    h3C.textContent = towns[i].name;
    para1C.textContent = '"' + towns[i].motto + '"';
    para2C.textContent = "Year Founded: " + towns[i].yearFounded;
    para3C.textContent = "Current Population: " + towns[i].currentPopulation;
    para4C.textContent = "Average Rainfall: " + towns[i].averageRainfall;
    para1C.style.fontWeight = "bolder";


    articleC.appendChild(h3C);
    articleC.appendChild(para1C);
    articleC.appendChild(para2C);
    articleC.appendChild(para3C);
    articleC.appendChild(para4C);
    //articleC.appendChild(listC);

    for (var j = i; j < jPics.length;) {
      var pic = document.createElement("img");
      pic.src = jPics[j];
      if (j === 0) {
        pic.alt = "Picture of Preston, ID"
      } else if (j === 1) {
        pic.alt = "Picture of Soda Spirngs, ID"
      } else {
        pic.alt = "Picture of Fish Haven, ID"
      }
      articleC.appendChild(pic);
      break;
    }

    section.appendChild(articleC);
  }
}

