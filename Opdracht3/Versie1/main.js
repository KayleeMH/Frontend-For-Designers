console.log('test');
var header = document.querySelector('header');
console.log(header);

var requestURL = 'http://dennistel.nl/movies';
console.log(requestURL);

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var jasonfile = request.response;
    console.log(jasonfile);
    maakh1(jasonfile);

}

var maakh1 = function (jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj[0]['title'];
    header.appendChild(myH1);
    console.log(jsonObj[0]['title']);
}

var films = jsonObj;
console.log(films);
//for (var i = 0; i < films.length; i++) {
