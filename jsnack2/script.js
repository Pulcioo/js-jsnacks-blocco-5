console.log("JS OK")

// Crea 10 oggetti che rappresentano una zucchina. 
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// Creo 10 oggetti che rappresentano una zucchina.
const zucchina = [
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

// Divido in due array separati le zucchine che misurano meno o più di 15cm.
const zucchineCorte = [];
const zucchineLunghe = [];
let pesoZucchineCorte = 0;
let pesoZucchineLunghe = 0;

for (i = 0; i < zucchina.length; i++) {
    if (zucchina[i].lunghezza < 15) {
        zucchineCorte.push(zucchina[i])
    } else if (zucchina[i].lunghezza > 15) {
        zucchineLunghe.push(zucchina[i])
    }
}

// Stampo i due array ottenuti
console.log('Array zucchine corte', zucchineCorte)
console.log('Array zucchine lunghe', zucchineLunghe)

// calcolo il peso delle zucchine contenute nell'array zucchineCorte
for (i = 0; i < zucchineCorte.length; i++) {
    pesoZucchineCorte += zucchineCorte[i].peso;
}
// calcolo il peso delle zucchine contenute nell'array zucchineLunghe
for (i = 0; i < zucchineLunghe.length; i++) {
    pesoZucchineLunghe += zucchineLunghe[i].peso;
}

// Stampo separatamente quanto pesano i due gruppi di zucchine.
console.log('Peso totale zucchine corte', pesoZucchineCorte)
console.log('Peso totale zucchine lunghe', pesoZucchineLunghe)