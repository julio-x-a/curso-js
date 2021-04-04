const arr1 = [1,2,3], arr2 = [4,5,6], arr3 = [...arr1, ...arr2];
console.log(arr3);

arr3.forEach((element, index) => console.log(`${element} está en la posición ${index}`));