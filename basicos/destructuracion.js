/** Consiste en la asignación dinámica de variables, las propiedades
 * de un objeto o valores de un arreglo
 */

// Array

const arr = [1,2,3];
let [n1, n2, n3] = arr;
console.log(n1, n2 ,n3);

//Objeto
const persona = {
    nombre: 'Julio',
    edad: 23,
    altura: 1.76
}

let {nombre, edad, altura} = persona;
console.log(`La edad de ${nombre} es ${edad} y su altura es: ${altura}`);







