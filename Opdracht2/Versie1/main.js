console.log("doEs IT wORK bOISSS?");

var backbutton = document.querySelector("button:nth-child(1)");
var forwardbutton = document.querySelector("button:nth-last-child(1)");
console.log(backbutton);
var slide1 = document.querySelector("div:nth-child(2)");
var slide2 = document.querySelector("div:nth-child(3)");
var slide3 = document.querySelector("div:nth-child(4)");
var slide4 = document.querySelector("div:nth-child(5)");


var nextslide = function(){
    slide1.classList.remove("mainslide");
    slide1.classList.toggle("slides");
    slide2.classList.remove("slides");
    slide2.classList.add("mainslide");
    console.log("slide1 to slide2 suCCESS");
}

forwardbutton.addEventListener("click", nextslide);


