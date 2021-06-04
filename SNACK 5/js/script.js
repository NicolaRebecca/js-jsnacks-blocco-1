//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

var list = [];

for ( var x =1; x <= 6; x++) {
    var num = parseInt(prompt("dammi il num"));
    if (num % 2 !== 0){
        list.push(num)
    } //è dispari perchè il resto del num diviso 2 non è zero
    
}


console.log(list);

















