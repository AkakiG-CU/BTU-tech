// Topic: Default Parameters
// File: default-parameters.js

// Starter: greeting with a default name
function greetStarter(name = 'Guest') {
  // TODO: return greeting string
  // e.g. return `Hello, ${name}!`;
  return null;
}

// Solution
function greetSolution(name = 'Guest') {
  return `Hello, ${name}!`;
}

// Example: default evaluated at call time
function timeStampedMessage(msg, stamp = new Date().toISOString()) {
  return `${stamp} - ${msg}`;
}

if (typeof window !== 'undefined') {
  window.greetStarter = greetStarter;
  window.greetSolution = greetSolution;
  window.timeStampedMessage = timeStampedMessage;
} else {
  module.exports = { greetStarter, greetSolution, timeStampedMessage };
}
