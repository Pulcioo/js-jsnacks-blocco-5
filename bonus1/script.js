console.log("JS OK")

// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro, 
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// creo due array diversi tra loro ma della stessa lunghezza
const arrayOspiti = ['Davide', 'Francesco', 'Damiano', 'Daniele', 'Cristian'];
const arrayCena = ['carne', 'pizza', 'hamburger', 'pesce', 'pasta'];

console.log(arrayAlternati(arrayOspiti, arrayCena))

// creo funzione che fonde i due array in modo alternato
function arrayAlternati(arrayUno, arrayDue) {
    const arrayFusi = [];
    for (i = 0; i < arrayUno.length; i++) {
        arrayFusi.push(arrayUno[i], arrayDue[i])
    }
    return arrayFusi
}

