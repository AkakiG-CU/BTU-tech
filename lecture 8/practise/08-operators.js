// Operators
// Arithmetic
const a = 10, b = 3;
console.log('arith:', a + b, a - b, a * b, a / b, a % b);

// Assignment
let x = 5;
x += 2; x -= 1; x *= 3; x /= 2;
console.log('assignment result:', x);

// Comparison
console.log('==:', 5 == '5', '===:', 5 === '5', '!=:', 5 != 4, '>:', 5 > 3, '<=:', 3 <= 2);

// Logical
console.log('logical:', true && false, true || false, !true);

// String
console.log('string +:', 'Hello ' + 'World');

// Ternary
const age = 18;
console.log('ternary:', age >= 18 ? 'adult' : 'minor');
