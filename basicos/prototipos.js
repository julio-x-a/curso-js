function Animal(nombre, patas = 4){
    this.nombre = nombre;
    this.patas =  patas;
}

Animal.prototype.sonido = function() {
    console.log(`Hacer sonidos de ${this.nombre}`);
}

const conejo = new Animal('Conejo', 4);
conejo.sonido();
console.log(conejo);

// Herencia prototipica

function Perro(nombre, raza) {
    this.super = Animal;
    this.super(nombre);
    this.raza = raza;
}

Perro.prototype =  new Animal();
Perro.prototype.constructor = Perro;

const perro = new Perro('Supercan', 'Normal');
console.log(perro);