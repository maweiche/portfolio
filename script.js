//Moment.js

setInterval(myTimer, 0);

function myTimer() {
    const d = new Date();
    document.getElementById("time").innerHTML= d.toLocaleTimeString();
}