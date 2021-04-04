const json = {
  name: 'Julio',
  email: 'julio@gmail.com',
  age: 23
};

console.log(typeof JSON.parse('[1,2,3]'));
console.log(typeof JSON.parse('10'));
console.log(typeof JSON.stringify(json));
