console.log('OK JS!')
    /*
    Snack 1
    Creare un array di oggetti:
        Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
        Stampare in console la bici con peso minore utilizzando destructuring e template literal
    */
const result = document.getElementById('result');
const paragraph = document.createElement('p');

const bikes = [{
        nome: 'merida',
        peso: 20,
    },
    {
        nome: 'decathlon',
        peso: 10,
    },
    {
        nome: 'trek',
        peso: 25,
    },
    {
        nome: 'scott',
        peso: 15,
    },
]


let min = 0;
let nameMin = '';
for (let i = 0; i < bikes.length - 1; i++) {
    const { nome, peso } = bikes[i];
    const nextPeso = bikes[i + 1].peso;
    if (nextPeso > peso) {
        min = peso;
        nameMin = nome;
    }
}
console.log(`La bicicletta ${nameMin} è quella che pesa di meno, ovvero: ${min} kg `);
paragraph.append(`La bicicletta ${nameMin} è quella che pesa di meno, ovvero: ${min} kg `);

result.appendChild(paragraph);