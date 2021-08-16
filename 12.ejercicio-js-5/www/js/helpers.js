export { removeDup, debuggedArray };

let debuggedArray = [];
const removeDup = (array) => {
    debuggedArray = array.reduce((acc, item) => {
        return acc.includes(item) ? acc : [...acc, item];
    }, []);
};
