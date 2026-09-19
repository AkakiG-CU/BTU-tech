// Object destructuring
const person = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 25
};
const { firstName, age } = person;
// Array destructuring
const numbers = [10, 20, 30];
const [a, b] = numbers;
console.log(a); // 10
console.log(b); // 20
// Function params destructuring
function greet({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}
greet(person); // Hello, Alice Johnson!
