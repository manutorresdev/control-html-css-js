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

// creating function "remove Duplicates" with an array as property
const removeDup = (array) => {
    // creating empty array for formatting array without duplicates
    let newArr = [];
    // reducing items from the array and checking if it has dups
    newArr = array.reduce((acc, item) => {
        // log to understand everything in this reduce
        console.log(
            `El accumulator es: ${acc},
            Comprobamos que ${item} esté en el acc: ${acc.includes(item)}
            Si no está (false), el item entra al acc.`
        );
        // asking if the accumulator has the exact item. If false, item gets pushed to acc. Else, it doesnt and reduce goes to next item
        // if (!acc.includes(item)) {
        //     newArr.push(item);
        // }
        // return newArr;
        return acc.includes(item) ? acc : [...acc, item];
    }, []);
    // using for of to iterate the new array and printing it on console
    for (const x of newArr) {
        console.warn(x);
    }
};
// calling names array
removeDup(names);
// calling numbers array
removeDup(numbers);

// Gran idea 😒

// const removeDup2 = (array) => {
//     let newArr = [];
//     newArr = array.filter((x, i) => {
//         return array.indexOf(x) === i;
//     });
//     console.log(newArr);
// };

// removeDup2(names);