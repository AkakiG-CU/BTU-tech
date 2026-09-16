// Topic: Higher-order Functions
// File: higher-order-functions.js

// Starter: create 1..10, filter even, double them
function mapFilterStarter() {
  // TODO: return array
  // Hint: Array.from({length:10}, (_,i) => i+1).filter(...).map(...)
  return null;
}

// Solution
function mapFilterSolution() {
  const nums = Array.from({ length: 10 }, (_, i) => i + 1);
  return nums.filter(n => n % 2 === 0).map(n => n * 2);
}

// Starter: sum with reduce
function sumStarter(prices, discount = 0) {
  // TODO: use reduce then subtract discount
  return null;
}

// Solution
function sumSolution(prices, discount = 0) {
  const total = prices.reduce((s, p) => s + p, 0);
  return total - discount;
}

if (typeof window !== 'undefined') {
  window.mapFilterStarter = mapFilterStarter;
  window.mapFilterSolution = mapFilterSolution;
  window.sumStarter = sumStarter;
  window.sumSolution = sumSolution;
} else {
  module.exports = { mapFilterStarter, mapFilterSolution, sumStarter, sumSolution };
}
