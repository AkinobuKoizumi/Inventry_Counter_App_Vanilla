


var red = document.getElementById("red");
var redText = document.getElementById("redText");
var blue = document.getElementById("blue");
var blueText = document.getElementById("blueText");
var green = document.getElementById("green");
var greenText = document.getElementById("greenText");
var totalInventry = document.getElementById("totalInventry");
var redCount=0;
var greenCount=0;
var blueCount=0;
var totalCount;


red.addEventListener("click",redReText);
blue.addEventListener("click",blueReText);
green.addEventListener("click",greenReText);

function redReText(){
    redCount++;
    redText.innerHTML=redCount;
    Count();
}
function blueReText(){
    blueCount++;
    blueText.innerHTML=blueCount;
    Count();
}
function greenReText(){
    greenCount++;
    greenText.innerHTML=greenCount;
    Count();
}
function Count(){
    totalCount=redCount+blueCount+greenCount;
    totalInventry.innerHTML = totalCount;
}
