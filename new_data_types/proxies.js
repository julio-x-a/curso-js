const animal = {
  name: 'cat',
  life: 9
};

const handler = {
  set(obj, propiedad, value) {
    if (Object.keys(obj).indexOf(propiedad === -1))
      return console.error(`"${propiedad}" invalida`);
    obj[propiedad] = value;
  }
};

const objProxy = new Proxy(animal, handler);
objProxy.maullar = function () {
  console.log('Meeeow');
};

console.log(animal);
