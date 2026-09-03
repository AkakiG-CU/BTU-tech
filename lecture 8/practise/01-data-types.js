// Data Types examples
const num = 42;
const floatNum = 3.14;
const big = 9007199254740991n; // BigInt
const str = "Hello World";
const bool = true;
let undef; // undefined
const nullable = null; // note: typeof null === 'object'
const sym = Symbol('id');
const obj = { name: "Alice" };

console.log('number:', typeof num, 'float:', typeof floatNum);
console.log('bigint:', typeof big);
console.log('string:', typeof str);
console.log('boolean:', typeof bool);
console.log('undefined:', typeof undef);
console.log('null (quirk):', typeof nullable);
console.log('symbol:', typeof sym);
console.log('object:', typeof obj);
