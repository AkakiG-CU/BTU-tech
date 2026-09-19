// Set examples
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate ignored
console.log(set.has(1));
set.delete(1);
set.clear();
console.log(set.size);
for (let value of set.values()) {
  console.log(value);
}
for (let value of set.keys()) {
  console.log(value);
}
for (let [value1, value2] of set.entries()) {
  console.log(value1, value2);
}
set.forEach(value => {
  console.log(value);
});
