/*
*Nueva forma de asignar valores a las propiedades de un objeto*/

let nombre = 'Mew';
let edad = 1;

const cat = {
    nombre,
    edad,
    maullar(){
        console.log("Meeeauuuw!!");
    }
}

console.log(cat);
cat.maullar();