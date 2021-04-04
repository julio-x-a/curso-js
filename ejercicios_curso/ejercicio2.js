/**
 * *Programa una función que invierta las palabras de
 * * una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */

 let cadena = "Hola Mundo";

 const reverseString = (cadena) => {  //Manualmente
     let cadenaReverse = '';
     let {length} = cadena;
     for (let i = length; i != 0; i--) {
        cadenaReverse += cadena[i - 1];       
     }
     return cadenaReverse;
 }

 function reverseString2(cadena) { // Con metodos
    console.log(cadena ? cadena.split('').reverse().join('') : `"${cadena}" No es una cadena`);
 } 

 reverseString2("Hola Mundo");
 console.log(reverseString(cadena));

 
 /**
  * *Programa una función para contar el número de veces que se repite 
  * *una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") 
  * *devolverá 2.
  * !No terminado
  */

  function countWord(str, word) {
    const re = new RegExp(word, 'ig');
    if(typeof str !== 'string' || typeof word !== 'string') return "Ingresa valores válidos"
    console.log(str.match(re).length);
  }

  countWord("Lorem, ipsum lorem,", "lorem");

  /**
   * *Programa una función que valide si una palabra o frase dada, es un palíndromo 
   * *(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
   */

   function isPalindromo(str) {
       let str2 = reverseString(str);
       const re = / /g;
       return str.toLowerCase().replace(re, '') === str2.toLowerCase().replace(re, '') ? 
       true : false;
   }

   console.log(isPalindromo("A la Manuela dale una mala"));


/**
 * *Programa una función que elimine cierto patrón de caracteres de un texto dado,
 * *pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

 function replacePattern(str, pattern) {
     let str2 = str.replace(new RegExp(pattern, 'ig'), '');
     return str2;
 }

 console.log(replacePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));