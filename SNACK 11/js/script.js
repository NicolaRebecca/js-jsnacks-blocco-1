//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

numero = parseInt(prompt("inserisci il numero"))

if (parseInt(numero) % 2 == 0){
    document.getElementById("risultato").innerHTML += numero + "  il numero è pari";
}else {
    document.getElementById("risultato").innerHTML += parseInt(numero) + 1;
}