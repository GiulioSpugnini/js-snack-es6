/*
SNACK 4
    Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
    1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
    ES (marco de iulio => Marco de iulio);
    2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
    3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 
    BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)
 
*/
//#FUNZIONI
//Ottengo la prima lettera maiuscola
function capitalizeFirstLetter(nome) {
    let word = nome.toLowerCase().split(' ');
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
    }
    return word.join(' ');
}

const filterStudent = (student, key, value) => student[key] === value;
//??ELEMENTI DA UTILIZZARE
const students = [{
        id: 90,
        nome: 'giulio el furio',
        sommaVoti: 121,
    },
    {
        id: 8,
        nome: 'antonio el draco del demonio',
        sommaVoti: 90,
    },
    {
        id: 13,
        nome: 'vasco ci casco',
        sommaVoti: 69,
    },
    {
        id: 3,
        nome: 'davide lo giovine',
        sommaVoti: 130,
    },
]

//! ESECUZIONE
const studentUppercase = students.map(student => capitalizeFirstLetter(student.nome));
const student70 = students.filter(student => student.id > 70 ? true : false);
const student70Id120 = students.filter(student => student.id > 70 && student.sommaVoti > 120 ? true : false);
const resultStudent = {...studentUppercase, ...student70, ...student70Id120 };
//??STAMPO
console.table(studentUppercase);
console.table(student70);
console.table(student70Id120);
console.table(resultStudent);