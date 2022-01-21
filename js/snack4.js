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
const getUpperCase = (word) => word[0].toUpperCase();
const filterStudent = (student, key, value) => student[key] === value;
//??ELEMENTI DA UTILIZZARE
const students = [{
        id: 9,
        nome: 'Giulio',
        sommaVoti: 119,
    },
    {
        id: 8,
        nome: 'Antonio',
        sommaVoti: 90,
    },
    {
        id: 13,
        nome: 'Vasco',
        sommaVoti: 69,
    },
    {
        id: 3,
        nome: 'Davide',
        sommaVoti: 130,
    },
]

//! ESECUZIONE
const studentList = students.filter((student) => filterStudent(student, 'nome', getUpperCase(value)));
console.log(studentList);