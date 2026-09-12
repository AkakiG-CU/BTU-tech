// Catching the error with try/catch
try {
  throw new Error('We have some error');
} catch (error) {
  console.log('we have some error');
  console.log(error.toString());
}
