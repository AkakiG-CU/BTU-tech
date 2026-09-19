// Objects basics: everything is object
const arr = [1,2,3];
const fn = function() { return 'I am a function'; };
const num = new Number(42);
const str = new String('hello');
const obj = { a: 1, b: 2 };

console.log(typeof arr, typeof fn, typeof num, typeof str, typeof obj); // object object object object object
