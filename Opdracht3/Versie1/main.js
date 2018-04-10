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
        //DE BLOKKEN WAARIN DE INFO GAAT
        var filmblok = document.createElement('div');
        var infoblok = document.createElement('article');
        filmblok.classList.add("filmblok");
        infoblok.classList.add("infoblok");
        container.appendChild(filmblok);
        container.appendChild(infoblok);

        //CREEEREN FILMBLOK
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

        //DE VERBORGEN INFOBLOKKEN
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
        //director
        /*var director = document.createElement('h4');
        director.textContent = jsonObj[i]['directors'][i]['name'];
        infoblok.appendChild(director);*/
        //acteurs
        var acteurs = jsonObj[i]['actors'];
        var acteurblok = document.createElement('div');
        var acteurtitle = document.createElement('h4');
        acteurtitle.innerHTML = 'Actors'
        infoblok.appendChild(acteurblok);
        acteurblok.appendChild(acteurtitle);
        for (var ib = 0; ib < acteurs.length; ib++) {
            var acteurfoto = document.createElement('img');
            acteurfoto.src = jsonObj[i]['actors'][ib]['url_photo'];
            acteurblok.appendChild(acteurfoto);

        }

        //KLIKFUNCTIE VOOR ZIEN VAN INFO
        infobutton.info = infoblok;
        infobutton.addEventListener("click", function () {
            this.info.classList.add('active');
        });

        //KLIKFUNCTIE VOOR EXIT VAN INFO
        exitbutton.exit = infoblok;
        var exit = function () {
            this.exit.classList.remove('active')
        };
        exitbutton.addEventListener("click", exit);
        
        function escExit(event) {
            var checkkey = event.keyCode;
            if (checkkey == 27) {
                console.log('esc pressed')
                
            }
        }
        document.addEventListener('keydown', escExit);

    }

}
//einde van de mega loop
//einde functie filmtitle
