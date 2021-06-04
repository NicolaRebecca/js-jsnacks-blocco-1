//Calcola la somma e la media dei primi 10 numeri.


// for( var i = 0; i <= 10; i++) {
//    var numeri = Math.floor((Math.random() * 10) + 1);
//    somma = parseInt(numeri) + parseInt(i)
// }
// document.getElementById("risultato").innerHTML += somma ;

// media = somma / 10
// document.getElementById("risultato").innerHTML += " <br> la media è " + media;



//_________ correzzione ________________

var totale = 0;
var max = 10
var sum = 0;

for ( var x = 1; x<=max; x++){
    sum += x
}

var avg = sum/max;

document.getElementById("risultato").innerHTML += "la somma è " + sum;

document.getElementById("risultato").innerHTML += " la media è " + avg;