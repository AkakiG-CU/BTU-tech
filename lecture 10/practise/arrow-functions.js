// Topic: Arrow Functions
// File: arrow-functions.js
// Contains a small starter (TODO) and a solution for classroom practice.

// Starter: use arrow shorthand to square numbers
function squareStarter(nums) {
  // TODO: return nums.map(/* arrow here */);
  // e.g. nums.map(n => n * n)
  return null;
}

// Solution
function squareSolution(nums) {
  return nums.map(n => n * n);
}

// Example: implicit return and returning object literal
const makePoint = (x, y) => ({ x, y });

// Export to global (browser) for easy calling from console
if (typeof window !== 'undefined') {
  window.squareStarter = squareStarter;
  window.squareSolution = squareSolution;
  window.makePoint = makePoint;
} else {
  module.exports = { squareStarter, squareSolution, makePoint };
}
