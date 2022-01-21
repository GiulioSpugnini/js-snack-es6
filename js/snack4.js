/*
SNACK 4
    Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
    1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
    ES (marco de iulio => Marco de iulio);
    2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
    3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120  
*/
//#FUNZIONI
//Ottengo la prima lettera maiuscola
function capitalizeFirstLetter(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}
const filterStudent = (student, key, value) => student[key] === value;
//??ELEMENTI DA UTILIZZARE
const students = [{
        id: 90,
        nome: 'giulio',
        sommaVoti: 121,
    },
    {
        id: 8,
        nome: 'antonio',
        sommaVoti: 90,
    },
    {
        id: 13,
        nome: 'vasco',
        sommaVoti: 69,
    },
    {
        id: 3,
        nome: 'davide',
        sommaVoti: 130,
    },
]

//! ESECUZIONE
const studentUppercase = students.map(student => capitalizeFirstLetter(student.nome));
const student70 = students.filter(student => student.id > 70 ? true : false);
const student70Id120 = students.filter(student => student.id > 70 && student.sommaVoti > 120 ? true : false);
console.table(studentUppercase);
console.table(student70);
console.table(student70Id120);