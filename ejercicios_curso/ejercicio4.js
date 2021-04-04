/**
 * * Función que devuelve un monto al que se le aplica un porcentaje de 
 * * descuento
 */

 function off(monto, descto) {
     if(typeof monto !== 'number') return "NaN";
     descto = (descto/100) * monto;
     return monto - descto;
 }
 
 console.log(off("1000", 10));

 /**
  * * Programa una función que dada una fecha válida determine cuantos años han pasado 
  * *hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
  */

  function getYears(fecha = Date.now()) {
      return (new Date().getFullYear()) - fecha.getFullYear();
  }

  console.log(getYears(new Date(2025, 4, 23)));
