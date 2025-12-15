let colors = ["red", "yellow", "green"]; 
let index = 0;

setInterval(changecolor, 2000);

function changecolor() { 
    turnOn(colors[index]);
    index = (index + 1) % colors.length; 
}

function turnOn(color) {
    document.getElementById("red").style.backgroundColor = "silver";
    document.getElementById("yellow").style.backgroundColor = "silver";
    document.getElementById("green").style.backgroundColor = "silver";

    document.getElementById(color).style.backgroundColor = color;
}