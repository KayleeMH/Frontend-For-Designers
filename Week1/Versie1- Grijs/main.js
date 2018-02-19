console.log("Test");


// selecteren van de items, het artikel & the div waarin het gedropped wordt
var article1 = document.querySelector('header + article');
// var article2 = document.querySelector('blok1 + article');
var areadrop = document.querySelector('div:last-of-type');
// console.log('article1 '+ article1);
// console.log(article2);

var allowingdrop = function (ev) {
    ev.preventDefault();
}
// begin van de drag x 2

var colourdragstart = function (ev) {
    console.log('dragging start');
    article1.classList.add('dragging');
    areadrop.classList.add('draggingarea');
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    console.log(ev.target.id);
}
var colourdragstart2 = function (ev) {
    console.log('dragging2 start');
    article2.classList.toggle('dragging');
    areadrop.classList.toggle('draggingarea');
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    console.log(ev.target.id);
}
// the drop function 

var thedrop = function (ev) {
    console.log('item has been dropped');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
// het eindigen van de drop x2

var colourdragend = function (ev) {
    console.log('dragging end');
    article1.classList.remove('dragging');
    areadrop.classList.remove('draggingarea');
}

var colourdragend2 = function (ev) {
    console.log('dragging2 end');
    article2.classList.remove('dragging');
    areadrop.classList.remove('draggingarea');
}

// the droparea enter & leave function 

var droparea = function (ev) {
    console.log('droparea is entered');
    ev.preventDefault;
    areadrop.classList.add('droptargetarea');
}

var droparealeave = function (ev) {
    console.log('droparea is left');
    ev.preventDefault;
    areadrop.classList.remove('droptargetarea');
}

article1.addEventListener("dragstart", colourdragstart);
article1.addEventListener("dragend", colourdragend);
//article2.addEventListener("dragstart", colourdragstart2);
//article2.addEventListener("dragend", colourdragend2);
areadrop.addEventListener("dragover", allowingdrop);
areadrop.addEventListener("drop", thedrop);
areadrop.addEventListener("dragenter", droparea);
areadrop.addEventListener("dragleave", droparealeave);

// areadrop.addEventListener("drop", thedrop);

//var droparea = document.querySelector('div:last-of-type');
// console.log('droparea' + droparea);




