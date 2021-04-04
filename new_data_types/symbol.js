/**Symbol es un nuevo tipo de dato primitivo, que nos sirve para privatizar
 * propiedades y metodos de un objeto, al igual que hace que las referencias de
 * variables y constantes sean unicas
 */

let x = Symbol(10);
let y = Symbol(10);

console.log(x === y); //out: false

//Lo adecuado es usar const para definir propiedades

const NAME = Symbol();

let person = {
  [NAME]: "Jon", //Corchetes para referirse a un tipo Symbol
};

console.log(person);
person.NAME = "Julio";
console.log(person);

const saludar = Symbol("saludar");

person[saludar] = function () {
  console.log("Hola");
};

console.log(person);

for (const key in person) {
  console.log(key);
  console.log(person.key);
}
