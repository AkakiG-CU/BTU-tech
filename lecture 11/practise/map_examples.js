// Map examples
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1'));
console.log(map.has('key2'));
map.delete('key1');
map.clear();
console.log(map.size);
for (let key of map.keys()) {
  console.log(key);
}
for (let value of map.values()) {
  console.log(value);
}
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
map.forEach((value, key) => {
  console.log(key, value);
});
