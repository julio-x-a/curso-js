// const arr = ["🐍", "🐵", "🐸"];

// for (let e of arr) {
//   console.log(e);
// }

const min = (value1, value2) => {
  if (typeof value1 !== 'number' && typeof value2 !== 'number')
    return 'Ingresa un número';
  if (value1 === value2) return 'Iguales';
  return value1 > value2 ? value2 : value1;
};

// console.log(min(-3, -3));

function isPar(number) {
  if (number === 0) return true;
  if (number === 1) return false;
  return isPar(number - 2);
}

// console.log(isPar(75));

function countFs(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) count++;
  }
  return count;
}

// console.log(countFs('FFffFFF', 'F'));

