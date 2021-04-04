/**
 ** Función que devuelve cuantas vocales y consonantes tiene una cadena
 */

 function countLetters(cadena) {
    let vocales = 0, consonantes = 0;
        for (let letra of cadena) {
            if(/[bcdfghjklmnpqrstwxyz]/i.test(letra)) consonantes++;
            if(/[aeiouá-ü]/i.test(letra)) vocales++;
        }
    return `Vocales: ${vocales}\nConsonantes: ${consonantes}`;
 }

 console.log(countLetters('HolÁ mundO'));  


/* Función que valide un nombre */

function validateName(nombre) {
    if(typeof nombre !== 'string') return `${nombre} No es una cadena!`;
    return (/^[a-zñá-ü\s]+$/ig.test(nombre)) ? `${nombre} es válido!` : `${nombre} NO es válido`;
}

console.log(validateName('Julio Ramón'));


/* Programa una función que dado un array numérico devuelve otro array con
 los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

 function getArraySquare(arr = []) {
    return arr.map((num) => Math.pow(num, 2));
 }

 console.log(getArraySquare([2, 6, 8]));


 /**Programa una función que dado un array devuelva el número mas alto y el más bajo 
  * de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

  function getMinMax(arr) {
      let max = Math.max(...arr), min = Math.min(...arr);
      return `[${max}, ${min}]`;
  }

 console.log(getMinMax([100, -60, 109, -300, 0, 239, 1]));

 /**Programa una función que dado un array de números devuelva un objeto con 2 arreglos
  *  en el primero almacena los números pares y en el segundo los impares,
  *  pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

  function objectNums(arr) {
      const pares = [], impares = [];
      arr.forEach(num => num % 2 === 0 ? pares.push(num) : impares.push(num));
      return {pares, impares};
  }

  console.log(objectNums([1,2,3,4,5,6,7,8,9]));
