/**
 ** Programa una función que cuente el número de caracteres 
 ** de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
 */

 function countCaracter(cadena) {
    console.log(typeof cadena == 'string' ? cadena.length :`"${cadena}" No es una cadena!`); 
 }

 countCaracter(1);

 /**
  * *Programa una función que te devuelva el texto recortado según el 
  * *número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
  */

  function recortarCadena(cadena, indice) {
    let cadenaRecortada = '';  
        for (let i = 0; i < indice; i++) {
            cadenaRecortada += cadena[i];
        }
    console.log(cadenaRecortada);
  }

//   recortarCadena("Hola Mundo", 4);


  /**
   * *Programa una función que dada una String te devuelva un Array de textos separados 
   * *por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
   */

   function printArrayString(cadena, caracter) {
    let element = ''; 
    const arr = [];  
       for (let i = 0; i < cadena.length; i++) {
            if(cadena[i] === caracter){
                arr.push(element);
                element = '';
                continue;
            }
           element += cadena[i];
       }
       arr.push(element);
       console.log(arr);
   }

   printArrayString('hola que tal', ' ');


  /**
   * *Programa una función que repita un texto X veces,
   * * pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
   */

   function repeatText(cadena, repeat) {
       for (let i = 0; i < repeat; i++) {
          console.log(cadena);    
       }
   }

//    repeatText("Repetir", 2);