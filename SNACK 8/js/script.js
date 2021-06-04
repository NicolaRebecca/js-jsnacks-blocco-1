//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)

var sum = 0;
var cifreUtente = prompt("inserisci un numero di 4 cifre");

if (parseInt(cifreUtente.length) > 4 ){
    document.getElementById("risultato").innerHTML += "hai inserito più di 4 cifre" ; 
} else {
    while (cifreUtente > 0) {
        sum += cifreUtente % 10;
        cifreUtente = Math.floor(cifreUtente / 10);
    }
    document.getElementById("risultato").innerHTML += sum ;
}




//__________________correzione_____________________________

//var usernumber = prompt("inserisci un numero di 4 cifre");
//var inputLen = usernumber.length
//var  result = 0


//for( var i = 0; i < inputLen; i++) {
//    result += parseInt(usernumber[i])
//}
//console.log(result);