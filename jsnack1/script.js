console.log("JS OK")

// Crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza. 
// Calcola quanto pesano tutte le zucchine.

// Creo un array di 10 oggetti indicando *varietà, peso e lunghezza* 
const zucchine = [
    {
        varietà: 'nera',
        peso: 220,
        lunghezza: 21,

    },
    {
        varietà: 'romanesca',
        peso: 100,
        lunghezza: 14,

    },
    {
        varietà: 'gialla',
        peso: 180,
        lunghezza: 18,

    },
    {
        varietà: 'nera',
        peso: 220,
        lunghezza: 21,

    },
    {
        varietà: 'romanesca',
        peso: 100,
        lunghezza: 14,

    },
    {
        varietà: 'gialla',
        peso: 180,
        lunghezza: 18,

    },
    {
        varietà: 'nera',
        peso: 220,
        lunghezza: 21,

    },
    {
        varietà: 'romanesca',
        peso: 100,
        lunghezza: 14,

    },
    {
        varietà: 'gialla',
        peso: 180,
        lunghezza: 18,

    },
    {
        varietà: 'nera',
        peso: 220,
        lunghezza: 21,

    },

]


sommaPesoZucchine();

// Calcolo quanto pesano tutte le zucchine
function sommaPesoZucchine() {
    let somma = 0
    for (i = 0; i < zucchine.length; i++) {
        somma += zucchine[i].peso;
    }
    console.log('Le zucchine pesano:' + somma + 'g')
}