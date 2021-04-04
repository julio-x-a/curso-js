/*Programa una función que dado un arreglo de números devuelva un objeto con
 dos arreglos, el primero tendrá los numeros ordenados en forma ascendente
  y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

function sortNums(arr) {
    if(!Array.isArray(arr)) return `${arr} No es un array!`;
    if(arr.length === 0) return 'El array está vacío';
    let asc = arr.map(num => num).sort(), desc = arr.sort((a, b) => b - a);
    return {asc, desc}
}


// console.log(sortNums([9,8,7,6,5,4,3,2,1]));


console.log([9,8,7,6,5,4,3,2,1].some(num => num === 5));


/* Función que cálcula el promedio de un array de números*/

function avgArray(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total / arr.length;
}

function avgArray2(arr) {
    return arr.reduce((a, b) => (a + b)) / arr.length;
}

console.log(avgArray2([5, 4, 5, 5]));


/*Función que elimina los elementos duplicados de un array */

function removeDuplicates(arr){
    return [...new Set(arr)]; 
}

console.log(removeDuplicates([true, true, 1, 10, "10", 10, false]));