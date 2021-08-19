'use strict';
/*
Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

-   Si le pasamos un nº en decimal debe retornar la conversión a binario.

-   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

No se permite utilizar el método parseInt().
*/

const toBinary = (number, type) => {
    if (type === 10) {
        // to string to convert decimal to binary
        console.log(
            `Number: ${number} ///// Binary of ${number}: ${number.toString(2)}`
        );
    } else if (type === 2) {
        // converting Number to string
        const numberString = number.toString();
        // converting string to an array of its numbers
        const numberArray = numberString.split('');
        // reversing index of the array to later power it to its numbers
        // also using map to get the total lenght of the array and the largest
        // power i'll use
        const power = numberArray
            .map((val, i) => {
                return i;
            })
            .reverse();
        // powering all numbers of the binary to get the results and later add themselves
        const almostBinary = numberArray.map((val, i) => {
            return val * Math.pow(2, power[i]);
        });
        // adding all numbers of the array with a reduce and its accumulator
        const binary = almostBinary.reduce((acc, i) => {
            return (acc = i + acc);
        });
        // logging final result
        console.log(`Binary: ${number} ///// Number of ${number}: ${binary}`);
    } else {
        console.warn('Wrong Type');
    }
};

toBinary(550, 10);
toBinary(111, 2);
