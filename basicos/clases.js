class Fruta {
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
  }

  get getNombre() {
    return this.nombre;
  }
  get getColor() {
    return this.nombre;
  }
  set setColor(color) {
    this.color = color;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }

  comer() {
    return `*Comer ${this.nombre}*`;
  }
}

class Manzana extends Fruta {
  constructor(nombre, color) {
    super(nombre, color);
  }

  comer(cascara) {
    console.log(
      cascara ? `Comer ${this.nombre}` : `Comer ${this.nombre} pelada`
    );
  }
}

const manzana = new Manzana('manzana', 'Verde');
// manzana.comer(false);
// console.table(Object.values(manzana));

const fecha = new Date();
console.log(fecha.toLocaleString());

function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludo = () => console.log('Hola');

const persona1 = new Persona('Julio');
persona1.saludo();
