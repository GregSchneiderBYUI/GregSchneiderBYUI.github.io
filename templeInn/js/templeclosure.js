var npclose = document.getElementById("npclosuresched");
var npclosewhole = document.getElementById("npclosewhole");
var crwclose = document.getElementById("crwclosuresched");
var crwclosewhole = document.getElementById("crwclosewhole");
var rexclose = document.getElementById("rexclosuresched");
var rexclosewhole = document.getElementById("rexclosewhole");
var pcclose = document.getElementById("pcclosuresched");
var pcclosewhole = document.getElementById("pcclosewhole");

var requestURL = 'https://gregschneiderbyui.github.io/templeInn/json/templeclosure.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    var closeText = request.response;
    var closure = JSON.parse(closeText);
    closure = closure["temples"];
    var h4 = document.createElement("h4");
    h4.textContent = "Closure Schedule";

    npclosewhole.appendChild(h4);
    for (var i = 0; i < closure[0].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[0].closureSchedule[i];
        npclose.appendChild(item);
    }
    npclosewhole.appendChild(npclose);

    var rh4 = document.createElement("h4");
    rh4.textContent = "Closure Schedule";
    rexclosewhole.appendChild(rh4);
    for (var i = 0; i < closure[1].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[1].closureSchedule[i];
        rexclose.appendChild(item);
    }
    rexclosewhole.appendChild(rexclose);

    var ch4 = document.createElement("h4");
    ch4.textContent = "Closure Schedule";
    crwclosewhole.appendChild(ch4);
    for (var i = 0; i < closure[2].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[2].closureSchedule[i];
        crwclose.appendChild(item);
    }
    crwclosewhole.appendChild(crwclose);

    var ph4 = document.createElement("h4");
    ph4.textContent = "Closure Schedule";
    pcclosewhole.appendChild(ph4);
    for (var i = 0; i < closure[3].closureSchedule.length; i++) {
        var item = document.createElement("li");
        item.textContent = closure[3].closureSchedule[i];
        console.log(item);
        pcclose.appendChild(item);
    }
    pcclosewhole.appendChild(pcclose);
}