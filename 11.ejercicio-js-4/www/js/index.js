'use strict';
const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

const numbers = [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 8, 9, 1, 2, 10, 1];
let newArr = [];

const removeDup = (array) => {
    newArr = array.reduce((acc, item) => {
        console.log(
            `El accumulator es: ${acc},
            Comprobamos que ${item} esté en el acc: ${acc.includes(item)}
            Si el valor es false, pusheamos el item al acc.`
        );
        return acc.includes(item) ? acc : [...acc, item];
    }, []);
    for (const x of newArr) {
        console.warn(x);
    }
};

removeDup(names);
