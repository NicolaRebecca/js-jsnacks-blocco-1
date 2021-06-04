// Stampa le potenze di 2 fino a 1000.


var cube = 1000;
for (var x = 1; x <= cube; x++){
   document.getElementById("risultato").innerHTML += Math.pow(x , 2) + "<br>"
    
}
