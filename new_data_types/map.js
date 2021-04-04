const map = new Map([
  ["id", 1],
  ["name", "item"],
]);

map.set("hp", null);
console.log(map);
console.log(Array.from(map));

const arrMap = [...map.keys()];
map.forEach((element) => console.log(element));
