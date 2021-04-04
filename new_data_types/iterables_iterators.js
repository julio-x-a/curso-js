const iterable = [1, 2, 3, 4];
const iterator = iterable[Symbol.iterator]();

let next = iterator.next();

while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
