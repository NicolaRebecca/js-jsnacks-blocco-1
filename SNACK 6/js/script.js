//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente attraverso un prompt.

// num = prompt("inserisci un numero")
// document.getElementById("risultato").innerHTML = Math.pow(parseInt(num), 3);

var cubic;
var number = parseInt(prompt("inserisci numero")) :

for(var x = 1; x <= number; x++){
    cubic = Math.pow(x , 3);
    document.getElementById("risultato").innerHTML += "<br> " + cubic ;
}

