// Topic: Strings (methods)
// File: strings.js

// Starter: capitalize first letter
function capitalizeStarter(str) {
  // TODO: implement with charAt and slice
  return null;
}

// Solution
function capitalizeSolution(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example: safe replaceAll fallback for older browsers
function replaceAllPolyfill(str, search, replace) {
  if (String.prototype.replaceAll) return str.replaceAll(search, replace);
  return str.split(search).join(replace);
}

if (typeof window !== 'undefined') {
  window.capitalizeStarter = capitalizeStarter;
  window.capitalizeSolution = capitalizeSolution;
  window.replaceAllPolyfill = replaceAllPolyfill;
} else {
  module.exports = { capitalizeStarter, capitalizeSolution, replaceAllPolyfill };
}
