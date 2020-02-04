var today = new Date();
var hourNow = today.getUTCHours;
var greetng;

if (hourNow> 18) {
    greetng = 'good evening!';
} else if (hourNow > 12) {greetng ='goodafternoon!';}
else if (hourNow > 0) {
    greeting = 'Good morni ng!';
    else {
    greeting = 'Welcome! ' ;
    document .write( ' <h3>' +greeting + ' </ h3> '); 