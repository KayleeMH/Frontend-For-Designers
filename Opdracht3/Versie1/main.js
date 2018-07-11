console.log('test');
var container = document.getElementById('container');
console.log(container);

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
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
        exitbutton.classList.add('exitbtn');
        infoblok.appendChild(exitbutton);
        exitbutton.innerHTML = 'x';
        //director
        /*var director = document.createElement('h4');
        director.textContent = jsonObj[i]['directors'][i]['name'];
        infoblok.appendChild(director);*/

        //acteurs
        var acteurs = jsonObj[i]['actors'];
        var acteurblok = document.createElement('div');
        var acteurdiv = document.createElement('div');
        acteurblok.classList.add('actorContainer');
        acteurdiv.classList.add('actorDiv');
        acteurdiv.appendChild(acteurblok);
        /*var acteurbtn = document.createElement('button');
        acteurbtn.innerHTML = 'Show actors'
        acteurbtn.classList.add('actorsbtn');
        infoblok.appendChild(acteurbtn);*/
        
        infoblok.appendChild(acteurdiv);
        for (var ib = 0; ib < acteurs.length; ib++) {
            var singleactor = document.createElement('div');
            singleactor.classList.add('actorblock');
            acteurblok.appendChild(singleactor);
            //img actor
            var acteurfoto = document.createElement('img');
            acteurfoto.src = jsonObj[i]['actors'][ib]['url_photo'];
            singleactor.appendChild(acteurfoto);
            //actor naam
            var acteurnaam = document.createElement('h5');
            acteurnaam.textContent = jsonObj[i]['actors'][ib]['actor_name'];
            singleactor.appendChild(acteurnaam);
            //actor role
            var acteurrole = document.createElement('h6');
            acteurrole.textContent = "as " + jsonObj[i]['actors'][ib]['character'];
            singleactor.appendChild(acteurrole);

        }
        //CREEEREN VAN BUTTON ACTEURS
        var nextbtn = document.createElement('button');
        nextbtn.innerHTML = '>';
        acteurdiv.appendChild(nextbtn);
        
        nextbtn.acteurs = acteurblok;
        nextbtn.addEventListener("click", function () {
            this.acteurs.classList.toggle('activeactor');
        });

        
        
        /*//SLIDER VOOR ACTORS 
        var counter = 0;
        var alleactors = acteurs.length;
        var currentactor = alleactors[0];
        console.log(alleactors);

        console.log(alleactors);
        var nextactor = function () {
            currentactor.classList.remove('activeAct');
            counter = counter + 1;
            if (counter >= alleactors) {
                counter = 0;
            }
            currentactor = alleactors[counter];
            currentactor.classList.add('activeAct');
            console.log(counter);
        }
        nextbtn.addEventListener("click", nextactor); */

        //KLIKFUNCTIE VOOR ZIEN VAN INFO
        infobutton.info = infoblok;
        infobutton.addEventListener("click", function () {
            this.info.classList.add('active');
        });

        //KLIKFUNCTIE VOOR EXIT VAN INFO
        exitbutton.exit = infoblok;
        var exit = function () {
            this.exit.classList.remove('active');
        };
        exitbutton.addEventListener("click", exit);

        //ESCFUNCTIE VOOR EXIT VAN INFOBLOK
        function escExit(event) {
            var checkkey = event.keyCode;
            if (checkkey == 27) {
                console.log('esc pressed');
            }

        }
        document.addEventListener('keydown', escExit);

        
    }

}
//einde van de mega loop
//einde functie filmtitle
