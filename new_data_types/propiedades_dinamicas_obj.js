let aleatory = Math.round(Math.random() * 100 + 5);

const obj = {
  propiedad: 'Value',
  [`id_${aleatory}`]: 'Random value'
};
const arr = ['Julio', 'Ana', 'Pablo'];

arr.forEach((element, index) => (obj[`id_${index}`] = element));
console.log(obj);
