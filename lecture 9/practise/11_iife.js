// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log('Hello from IIFE!');
})();

(function (name) {
  console.log('Hello, ' + name + '!');
})('Alice');
