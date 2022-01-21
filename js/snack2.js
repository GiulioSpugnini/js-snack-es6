/*Snack2
    Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti.
    Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/
const result = document.getElementById('result');
const paragraph = document.createElement('p');

const teams = [{
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: 'Verona',
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: 'Torino',
        puntiFatti: 0,
        falliSubiti: 0,
    }, {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0,
    },
]


function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndNumber(1, 10));
const newArray = [];
for (let i = 0; i < teams.length; i++) {
    let { nome, puntiFatti, falliSubiti } = teams[i];
    puntiFatti = getRndNumber(1, 100);
    falliSubiti = getRndNumber(1, 1000);
    console.log('punti: ' + puntiFatti);
    console.log('falli ' + falliSubiti);
    newArray.push({ nome, falliSubiti });
}

console.table(newArray);
paragraph.append(newArray);
result.appendChild(paragraph);