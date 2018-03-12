console.log("doEs thiS WOrk TOO?");

/* de buttons */
var nextbutton = document.querySelector("button:nth-last-child(1)");
var prevbutton = document.querySelector("button:nth-child(1)");

/* items opslaan */
var box = document.querySelector('.container');
var dots = box.querySelectorAll("spans");
var items = box.querySelectorAll('.content li');

/* counter om nummer in op te slaan op welke slide actief is */
var counter = 0;
var dotcounter = 0;

/* om te tellen hoeveel list items er zijn */
var alleslides = items.length;
var alledots = dots.length;

/* welke slide is actief */
var currentslide = items[0];
var currentdot = dots[0];
console.log(currentslide);
console.log(currentdot);

var nextslide = function () {
    currentslide.classList.remove('mainslide');
    currentslide.classList.add('slides');
    currentdot.classList.remove('maindot');
    currentdot.classList.add('transparentdot');
    /* counter gaat een omhoog door klikken van next */
    counter = counter + 1;
    dotcounter = dotcounter + 1;
    if (counter >= 4 && dotcounter >= 4) {
        counter = 0;
        dotcounter = 0;
    }
    console.log(counter);
    console.log(dotcounter);
    /* nieuwe currentslide is nieuwe getal van counter */
    currentslide = items[counter];
    currentdot = dots[dotcounter];
    currentslide.classList.remove('slides');
    currentslide.classList.add('mainslide');
}
nextbutton.addEventListener('click', nextslide);

function nextslidekey(event) {
    var checkkey = event.keyCode;
    if (checkkey == 39) {
        console.log("riGHT ARROW PRESSED!");
        currentslide.classList.remove('mainslide');
        currentslide.classList.add('slides');
        /* counter gaat een omhoog door klikken van next */
        counter = counter + 1;
        if (counter >= 4) {
            counter = 0;
        }
        console.log(counter);
        /* nieuwe currentslide is nieuwe getal van counter */
        currentslide = items[counter];
        currentslide.classList.remove('slides');
        currentslide.classList.add('mainslide');
    }
}
document.addEventListener('keydown', nextslidekey);

var lastslide = function () {
    currentslide.classList.remove('mainslide');
    currentslide.classList.add('slides');
    /* counter gaat een omhoog door klikken van next */
    counter = counter - 1;
    if (counter <= -1) {
        counter = counter + 4;
    }
    console.log(counter);
    /* nieuwe currentslide is nieuwe getal van counter */
    currentslide = items[counter];
    currentslide.classList.remove('slides');
    currentslide.classList.add('mainslide');
}
prevbutton.addEventListener("click", lastslide)

function lastslidekey(event) {
    var checkkey = event.keyCode;
    if (checkkey == 37) {
        console.log("Left arrow is pressed");
        currentslide.classList.remove('mainslide');
        currentslide.classList.add('slides');
        /* counter gaat een omhoog door klikken van next */
        counter = counter - 1;
        if (counter <= -1) {
            counter = counter + 4;
        }
        console.log(counter);
        /* nieuwe currentslide is nieuwe getal van counter */
        currentslide = items[counter];
        currentslide.classList.remove('slides');
        currentslide.classList.add('mainslide');
    }
}
document.addEventListener('keydown', lastslidekey);
