// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.



// con for:


var somma = 0; 

for (var i = 0; i < 5; i++) {
  n = parseInt(prompt('Inserisci un numero(for)'));
     somma += n;
 }

 document.getElementById("risultato").innerHTML += "(for) la somma è " + somma;



// con while:


var i = 0;

while (i < 5) {
    var numeri = prompt("inserisci numero(while)");
    somma = parseInt(numeri) + i;
    i++;
    
}
document.getElementById("risultato").innerHTML += " <br> (while)la somma è " + somma ;
