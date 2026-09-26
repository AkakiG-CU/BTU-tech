// Multiple then chaining
let p = new Promise((resolve, reject) => {
  resolve(5);
});

p.then(value => {
  console.log('First then:', value);
  return value * 2;
}).then(value => {
  console.log('Second then:', value);
});
