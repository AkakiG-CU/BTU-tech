// Method vs Function
const person = {
  name: 'Alice',
  greet: function () {
    return 'method just called';
  },
};

console.log(person.greet());

// A standalone function is not a method
function greet() { return 'Hello'; }
console.log(greet());
