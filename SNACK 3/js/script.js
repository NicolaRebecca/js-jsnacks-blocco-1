//il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

var result = 0;

for (var x = 1; x <= 10; x++) {  //creo una var. la faccio che deve essere min. o uguale a 10. poi la faccio incrementare di volta in volta con '++'
    var num = parseInt(prompt("inserisci numero"));
    result += num;  //la variabile result che prima era data a zero darà come output la somma dei 10 num inseriti
}

document.getElementById("risultato").innerHTML = result;


