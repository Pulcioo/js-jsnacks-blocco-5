console.log("JS OK")

// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
let stringaInvertita = invertiStringa('davide');
// stampo parola invertita
console.log(stringaInvertita)

// funzione per invertire una stringa
function invertiStringa(parola) {
    return parola.split("").reverse().join("");
}