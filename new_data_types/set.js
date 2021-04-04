const arr = [true, true, false, 1, 0, 1, "str"];

const set = new Set(arr);
set.add("Cat");
console.log(Array.from(set));
set.clear();
