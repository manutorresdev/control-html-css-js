'use strict';
/*
Consigue una lista con los nombres de los personajes de la serie
Rick and Morty que aparecen en los episodios lanzados en
el mes de enero (el año no importa).
*/

// importing function from helpers

import { removeDup, debuggedArray } from './helpers.js';

const getChars = async () => {
    // defining async var that could change
    let url = `https://rickandmortyapi.com/api/episode?page=`,
        page = 1,
        lastRes = [];
    // defining arrays to use while getting info
    const episodes = [],
        chars = [],
        charNames = [];
    // do while to select info from url's and iterate through api pages
    do {
        try {
            //getting api info
            const response = await fetch(`${url}${page}`),
                data = await response.json();
            // defining lastRes as last result
            lastRes = data;
            //destructuring to get results of data/lastResult
            let { results } = lastRes;
            //iterating through all results to get only "january" items
            for (const episode of results) {
                if (episode.air_date.includes('January')) {
                    episodes.push(episode.characters);
                }
            }
            //+1 to page, going next page
            page++;
        } catch (error) {
            console.warn('Error');
        }
    } while (lastRes.info.next !== null);
    // iterating through episodes to get all characterURL in one array
    for (const charactersURL of episodes) {
        for (let i = 0; i < charactersURL.length; i++) {
            chars.push(charactersURL[i]);
        }
    }
    // removing dups from charactersURLs
    removeDup(chars);
    // iterating debugged array to get exact names and locations from characters
    for (const character of debuggedArray) {
        const resp = await fetch(`${character}`),
            data2 = await resp.json();
        const { name, origin } = data2;
        // adding origin because if a name is repeated but it's from different location, it's going to show
        charNames.push(`${name} ${origin.name}`);
    }
    // finish
    console.log(charNames.sort());
};

console.time('Api call');
getChars();
console.timeEnd('Api call');
