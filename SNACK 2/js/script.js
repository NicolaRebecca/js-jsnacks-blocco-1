// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt("inserisci la prima parola")
var parola2 = prompt("inserisci la seconda parola")

if ( parola1.length < parola2.length){
    document.getElementById('risultato').innerHTML += parola1 + " " + parola2;
}else{
    document.getElementById('risultato').innerHTML += parola2 + " " + parola1;
}