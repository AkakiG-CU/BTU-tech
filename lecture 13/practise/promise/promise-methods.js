// Promise methods: then, catch, finally
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Change to reject('Error!') to test catch
    resolve('Success!');
  }, 500);
});

promise
  .then(value => {
    console.log('Then:', value);
    return value + ' (processed)';
  })
  .catch(error => {
    console.error('Catch:', error);
  })
  .finally(() => {
    console.log('Finally: Promise finished');
  });
