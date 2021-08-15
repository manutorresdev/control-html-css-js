'use strict';
/* # Ejercicio 2

Crea un programa que imprima cada 5 segundos,
 el tiempo desde la ejecución del mismo.
 Formatea el tiempo para que se muestren
 los segundos, los minutos, las horas y
 los días desde la ejecución.


*/

// Program starts as the button is pressed.

// const button = document.querySelector('button');
// const clock = document.querySelector('h1');
// const h2 = document.querySelector('h2');

// const time = () => {
//     // Capturing starting time in MS
//     const startDate = new Date();
//     console.log(`Time in MS: ${startDate.getTime()}`);
//     console.log('####################');
//     const timer = setInterval(() => {
//         // getting newest date to compare both
//         const actualDate = new Date();
//         //comparing starting date to actual date
//         const actualTime_ms = actualDate.getTime() - startDate.getTime();
//         console.log(`Actual time in ms: ${actualTime_ms}`);
//         console.log('####################');
//         // converting date got in MS to formatted Date JS model
//         const actualDateTime = new Date(actualTime_ms);
//         console.log(`Actual time formatted: ${actualDateTime}`);
//         console.log('####################');
//         // getting all needed to print date into html
//         let seconds = actualDateTime.getSeconds();
//         let minutes = actualDateTime.getMinutes();
//         let hours = actualDateTime.getHours();
//         let day = 0;
//         // formatting 00
//         hours = hours - 1;
//         if (seconds < 10) {
//             seconds = '0' + seconds;
//         }
//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }
//         if (hours < 10) {
//             hours = '0' + hours;
//         }
//         // printing to html
//         clock.textContent = `${hours}:${minutes}:${seconds}`;

//         if (hours === 23 && minutes === 59 && seconds === 59) day++;

//         if (day > 1) h2.textContent = `${day} Day`;
//         h2.textContent = `${day} DAYS`;
//     }, 5000);
//     // adding event to clear interval, needed to put this inside function
//     // to read the interval name
//     button.addEventListener('click', (e) => {
//         clearInterval(timer);
//         console.clear();
//     });
// };

// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     clock.textContent = '00:00:00';
//     button.textContent = 'Restart';
//     time();
// });

// PROBLEMA: Al formatear la fecha de milisegundos, me da la zona horaria +1, lo que hace
// que tenga una hora más en el reloj, de ahí la resta, lo mismo con días, empieza en el día nº 4

const button = document.querySelector('button'),
    clock = document.querySelector('h1'),
    h2 = document.querySelector('h2');

let seconds = '00',
    minutes = '00',
    hours = '00',
    days = 0,
    timerCall,
    printCall;

const timer = () => {
    seconds++;

    if (seconds < 10) seconds = '0' + seconds;

    if (seconds > 59) {
        seconds = '00';
        minutes++;

        if (minutes < 10) minutes = '0' + minutes;
    }

    if (minutes > 59) {
        minutes = `00`;
        hours++;
        if (hours < 10) hours = `0` + hours;
    }

    if (hours > 23) {
        hours = '00';
        days++;
    }

    if (days === 1) h2.textContent = `${days} Day`;

    h2.textContent = `${days} DAYS`;
};

const timerPrint = () => {
    clock.textContent = `${hours}:${minutes}:${seconds}`;
};

button.addEventListener('click', (e) => {
    e.preventDefault();
    button.textContent = 'Restart';
    timerCall = setInterval(timer, 1);
    printCall = setInterval(timerPrint, 1);

    button.addEventListener('click', () => {
        clearInterval(timerCall);
        console.log(`TimerCall Cleared `);
        console.log(`~~~~~~~~~~ ${new Date().toLocaleTimeString()}`);
        clearInterval(printCall);
        console.log(`PrintCall Cleared`);
        console.log('~~~~~~~~~~');
        clock.textContent = `00:00:00`;
        hours = `00`;
        minutes = `00`;
        seconds = `00`;
    });
});
