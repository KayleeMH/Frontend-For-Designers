console.log("doEs thiS WOrk TOO?");

/* de buttons */
var nextbutton = document.querySelector("button:nth-last-child(1)");
var prevbutton = document.querySelector("button:nth-child(1)");

/* items opslaan */
var box = document.querySelector('.container');
var items = box.querySelectorAll('.content li');
var box2 = document.querySelector('.dotcontainer');
var dots = box2.querySelectorAll('.transparentdot');

/* counter om nummer in op te slaan op welke slide actief is */
var counter = 0;
var dotcounter = 0;

/* om te tellen hoeveel list items er zijn */
var alleslides = items.length;
var alledots = dots.length;

/* welke slide is actief */
var currentslide = items[0];
var currentdot = dots[0];
console.log(currentdot);
console.log(currentslide);

var nextslide = function () {
    currentslide.classList.remove('active');
    currentdot.classList.remove('activedot');
    /* counter gaat een omhoog door klikken van next */
    counter = counter + 1; //counter++ zou ook moten werken
    dotcounter = dotcounter + 1;
    if (counter >= 4 && dotcounter >= 4) {
        counter = 0;
        dotcounter = 0;
    }
    currentslide = items[counter];
    currentdot = dots[dotcounter];
    currentslide.classList.add('active');
    currentdot.classList.add('activedot');
    console.log(counter);
}
nextbutton.addEventListener('click', nextslide);

var lastslide = function () {
    /* counter gaat een omlaag door klikken van prev */
    currentslide.classList.remove('active');
    currentdot.classList.remove('activedot');
    counter = counter - 1;
    dotcounter = dotcounter - 1;
    if (counter <= -1 && dotcounter <= -1) {
        counter = counter + 4;
        dotcounter = dotcounter + 4;
    }
    currentslide = items[counter];
    currentdot = dots[dotcounter];
    currentslide.classList.add('active');
    currentdot.classList.add('activedot');
    console.log(counter);
}
prevbutton.addEventListener("click", lastslide)

function slidekey(event) {
    var checkkey = event.keyCode;
    if (checkkey == 39) {
        nextslide();
    }
    if (checkkey == 37) {
        lastslide();
    }
}

document.addEventListener('keydown', slidekey);

var dot1 = document.querySelector('span:first-child');
var dot2 = document.querySelector('span:nth-child(2)');
var dot3 = document.querySelector('span:nth-child(3)');
var dot4 = document.querySelector('span:nth-child(4)');

var klikdots = function () {
        if (gekliktedot != dotcounter) {
            currentslide.classList.remove('active');
            currentdot.classList.remove('activedot');
        }
}
