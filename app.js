// pour créer une doc de la fonction ecrire : "/**"
/**
 * Returns sum of two numbers
 * @param {Number} a first number
 * @param {Number} b second number
 * @returns {Number} sum of two numbers
 */
function add(a, b) {
    return a+b;
}
add(3, 7);

/**
 * Returns subtract of two number (a - b)
 * @param {Number} a first number
 * @param {Number} b second number
 * @returns {Number} the substract of the first number and the second number
 */
function substract(a, b) {
    return a-b;
}
substract(7, 3);


/**
 * Returns the multiplication table in an array for a given number 
 * @param {Number} nb number to multiply
 * @returns {Number[]} Array of multiples of the given number
 */
function multiplicationTable(nb) {
    const table = [];
    for(let i = 1; i <= 10; i++ ) {
        table.push(nb * i);
    }
    return table;
}
console.log(multiplicationTable(2));


// pour créer une doc en html:
// npm install jsdoc
// npx jsdoc app.js
// genere le fichier out