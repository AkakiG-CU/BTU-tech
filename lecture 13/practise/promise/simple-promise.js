// Simple Promise example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved after 1 second');
  }, 1000);
});

promise.then(result => {
  console.log(result);
});
