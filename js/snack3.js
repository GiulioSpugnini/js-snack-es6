/*
SNACK 3
    Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
    Usiamo i nuovi metodi degli array visti oggi in classe.
 */
// #FUNZIONE
const subWords = (array, a, b) => {
    const newArray = array.filter((word, i) => {
        if (i >= a && i <= b) return true;
        else return false;
    });
    return newArray;
}

// ??Elementi da utilizzare
const words = ['giulio', 'carlo', 'antonio', 'giuseppe', 'federico', 'linda', 'laura'];


// !ESECUZIONE
console.log(subWords(words, 2, 5));