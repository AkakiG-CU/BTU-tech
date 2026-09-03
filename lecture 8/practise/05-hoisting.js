// Hoisting with var
console.log('data before declaration:', data); // undefined (declaration hoisted)
var data = 'myData';
console.log('data after declaration:', data); // 'myData'

// Hoisting with let/const (Temporal Dead Zone)
try {
  console.log('thing before declaration:', thing);
  let thing = 123;
} catch (e) {
  console.log('Accessing let before initialization throws:', e.name);
}
