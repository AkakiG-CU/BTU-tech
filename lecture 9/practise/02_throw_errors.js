// Throwing errors manually
try {
  throw new Error('Error');
} catch (e) {
  console.log(e.toString());
}

try {
  throw new RangeError('Oops, we have range error');
} catch (e) {
  console.log(e.toString());
}
