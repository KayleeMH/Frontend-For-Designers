console.log('test');
var container = document.getElementById('container');
console.log(container);

var requestURL = 'http://dennistel.nl/movies';
console.log(requestURL);

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var jasonfile = request.response;
    console.log(jasonfile);
    // maakfilm1(jasonfile);
    filmtitle(jasonfile);
    //infoblokken(jasonfile);

}
var filmtitle = function (jsonObj) {
    var allefilms = request.response;

    for (var i = 0; i < allefilms.length; i++) {
        //test om te kijken of ie loopt
        console.log('hi ' + i);
        //creeeren van alle blokken
        var filmblok = document.createElement('div');
        var infoblok = document.createElement('article');
        filmblok.classList.add("filmblok");
        infoblok.classList.add("infoblok");
        container.appendChild(filmblok);
        container.appendChild(infoblok);

        //creeeren van de titel van elke film
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj[i]['title'];
        filmblok.appendChild(myH1);
        //de covers
        var thecovers = document.createElement('img');
        thecovers.src = jsonObj[i]['cover'];
        filmblok.appendChild(thecovers);
        //create a lil buttonu for info
        var infobutton = document.createElement('button');
        filmblok.appendChild(infobutton);
        infobutton.innerHTML = 'i';
        //create smol plot
        var simpleplot = document.createElement("p");
        simpleplot.textContent = jsonObj[i]['simple_plot'];
        filmblok.appendChild(simpleplot);

        //de informatie blokken
        var myH1B = document.createElement('h1');
        myH1B.textContent = jsonObj[i]['title'];
        infoblok.appendChild(myH1B);
        //genre stuffO
        var genreshit = document.createElement("h2");
        genreshit.textContent = jsonObj[i]['genres'];
        infoblok.appendChild(genreshit);
        //release date
        var releasedate = document.createElement("h3");
        releasedate.textContent = jsonObj[i]['release_date'];
        infoblok.appendChild(releasedate);
        //create plot
        var simpleplot = document.createElement("p");
        simpleplot.textContent = jsonObj[i]['plot'];
        infoblok.appendChild(simpleplot);
        //create exit button
        var exitbutton = document.createElement('button');
        infoblok.appendChild(exitbutton);
        exitbutton.innerHTML = 'x';

        //functie buttons
        //show button 1
        /* var infobutton1 = document.querySelector('div:nth-child(1)>button');
        var info1 = document.querySelector("article:first-of-type");
        console.log(infobutton1);
        var showinfo = function () {
            info1.classList.add('active');
            console.log('geklikt');
        }
        infobutton1.addEventListener("click", showinfo); */
        var alleinfo = document.querySelectorAll('div > button');
        var infoblokken = document.querySelectorAll('article');
        console.log(infoblokken[0]);
        
        var showinfo = function () {
            for (var ib = 0; ib < alleinfo.length; ib++)
            if (alleinfo[0]) {
                infoblokken[0].classList.add('active');
            }
            else if (alleinfo[1]) {
                infoblokken[1].classList.add('active');
            }

        }
        document.addEventListener("click", showinfo);
    }
}
