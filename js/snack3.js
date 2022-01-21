/*
SNACK 3
    Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
    Usiamo i nuovi metodi degli array visti oggi in classe.
 */
// #FUNZIONE
const getSubNumbers = (array, a, b) => {
    const newArray = [];
    for (let i = a; i <= b; i++) {
        newArray.push(array[i]);
    }
    return console.log(newArray);
}

// ??Elementi da utilizzare
const numbers = ['giulio', 'carlo', 'antonio', 'giuseppe', 'federico', 'linda', 'laura'];

// !ESECUZIONE
const newNumbers = numbers.filter(() => getSubNumbers(numbers, 2, 4));
console.log(newNumbers);
// console.log(getSubNumbers(numbers, 2, 4));