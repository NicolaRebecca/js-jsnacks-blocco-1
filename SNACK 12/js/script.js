//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi 
//e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomiArray = ['Nicola','Luca','Mario','Luigi','Paolo','Maria','Andromeda','Patrizia']
var cognomiArray = ['Bianchi','Rossi','Verdi','Magalli','Bitta','Pedone','Pellegrino','Gervasoni']



for (var i = 0; i < 3; i++){
    var randomNomi = nomiArray[Math.floor(Math.random() * nomiArray.length)];
    var randomCognomi = cognomiArray[Math.floor(Math.random() * cognomiArray.length)];
    document.getElementById("risultato").innerHTML += randomNomi + " "  + randomCognomi  + "<br>";
}

