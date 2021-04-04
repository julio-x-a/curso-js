let array1 = [
  ['Cat', [2, 77, 9], [3, 2], [2, 99, 8], 12.4],
  [[40, 50, 60], [2, 77, 9], 'Dog', [2, 99, 8]],
  [[70, 80, 90], [2, 77, 9], [3, 2], 12.9]
];

let array2 = [10, 9, 2];

// function printArrayb(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       console.log(array[i][j]);
//     }
//   }
// }

// function printArrayb(array) {
//   for (let i = 0; i < array.length; i++) {
//     Array.isArray(array[i]) ? printArrayb(array[i]) : console.log(array[i]);
//   }
// }

function printArrayb2(array) {
  for (const element of array) {
    return Array.isArray(element) ? printArrayb(element) : element;
  }
}

function printArrayb(array) {
  array.forEach((element) =>
    Array.isArray(element) ? printArrayb(element) : console.log(element)
  );
}

printArrayb(array1);
