/**
 * *Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */
function getRandomBetween() {
    return Math.round((Math.random() * 100) + 500);
  }
  
console.log(getRandomBetween(590, 600));  

/**
 * *Programa una función que reciba un número y evalúe si es capicúa o no 
 * *(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */
function numerCapicua(numero) {
    if(isNaN(numero)) return "NaN";
    let numeroReverse = numero.toString().split('').reverse().join('');
    return numeroReverse === numero.toString();
}

console.log(numerCapicua(2121));

/**
 * * Calcula el factorial de un número
 */

 function factorial(num) {
     let total = 0;
     for (let i = 1; i <= num; i++) {
         total *= (i * (i + 1))
     }
     console.log(total);
 }

 factorial(6);


 /**
  * * Funcion que devuelve si un número es primo o no lo es
  */

  function isPrimo(numero) {
      if(isNaN(numero)) return 'NaN';
      let count = 0;
      for (let i = 1; i <= numero; i++) {
        if(numero % i === 0) count++;
      }
      return (count === 2) ? `${numero} es primo` : `${numero} no es primo`;
  }
  console.log(isPrimo("89"));
  
  /**
   * * Funcion que devuelve si un número es par o impar
   */

   function isPar(numero) {
      if(isNaN(numero)) return 'NaN';
       return numero % 2 === 0 ? `${numero} es par` : `${numero} es impar`;
   }

   console.log(isPar(23));


   /**
    * * Funcion que pasa de Celcius a Fahrenheit y viceversa
    */

  function gradosTo(grados, temp) {
    if(typeof grados !== 'number') return "NaN";
    if(!temp) return 'Ingresa la temperatura a convertir';
    return temp === 'C' ? (grados *= 1.8) + 32 : (grados - 32) / 1.8;  
  }  

  console.log(gradosTo(0));  
