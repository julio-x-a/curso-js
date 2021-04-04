function* iterable() {
  yield "it 1";
  console.log("Some code");
  yield "it 2";
  yield "it 3";
}

for (let y of iterable()) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);
