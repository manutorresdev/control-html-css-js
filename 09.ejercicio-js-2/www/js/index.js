'use strict';
/* # Ejercicio 2

Crea un programa que imprima cada 5 segundos,
 el tiempo desde la ejecución del mismo.
 Formatea el tiempo para que se muestren
 los segundos, los minutos, las horas y
 los días desde la ejecución.


*/

// Program starts as the button is pressed.

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    button.textContent = 'Restart';
    time();
});

const time = () => {};
