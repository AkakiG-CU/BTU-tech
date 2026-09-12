// Error types in JavaScript
console.log('— SyntaxError —');
try {
  eval('console.log("Hello"'); // missing closing )
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

console.log('\n— ReferenceError —');
try {
  console.log(x); // x is not defined
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

console.log('\n— TypeError —');
try {
  let num = 5;
  num.toUpperCase(); // numbers don't have toUpperCase
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

console.log('\n— RangeError —');
try {
  let arr = new Array(-1); // invalid length
} catch (e) {
  console.log(e.name + ': ' + e.message);
}
