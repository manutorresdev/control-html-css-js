'use strict';
/* # Ejercicio 1

Escribe una función que devuelva un array de usuarios.
De cada usuario guardaremos:
el username,
el nombre y apellido,
el sexo,
el país,
el email,
un enlace a su foto de perfil.

El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

 Sírvete de la API: https://randomuser.me/
*/
const users = [];

const getUsers = async (numberOfUsers) => {
    try {
        //getting api results
        const response = await fetch(
            `https://randomuser.me/api/?results=${numberOfUsers}`
        );
        //converting results to js readable object
        const { results } = await response.json();
        //iterating array of objects and pushing users.requiredInfo to empty array
        for (const user of results) {
            users.push({
                username: user.login.username,
                name: `${user.name.first} ${user.name.last}`,
                sex: user.gender,
                country: user.location.country,
                email: user.email,
                profile_pic: user.picture.large,
            });
        }
    } catch (error) {
        console.warn('Error');
    }
    //showing pushed array
    console.log(users);
    //checking numberOfUsers = users.length
    console.log(users.length);
};

console.time('API Call');
getUsers(50);
console.timeEnd('API Call');
// const username = user.login.username;
// const name_surname = `${user.name.first} ${user.name.last}`;
// const sex = user.gender;
// const country = user.location.country;
// const email = user.email;
// const profile_pic = user.picture.large;
