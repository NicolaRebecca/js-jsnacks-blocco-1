//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var ospite = prompt("dimmi come ti chiami") 
var invitati = ['nicola','mario','paolo','luca','wanda','pippo','gesu']


var check = false; 

for (var x = 0; x < invitati.length; x++) {
    if (invitati[x] === ospite) {
        check = true;
        break; 
    }
}

if (check) {
    document.getElementById('risultato').innerHTML += 'entra pure';
} else {
    document.getElementById('risultato').innerHTML += 'Non sei stato invitato';
}
