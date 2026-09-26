// Async/Await example
function promiseFn() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Async value'), 700);
  });
}

async function myAsyncFn() {
  const value = await promiseFn();
  console.log(value);
}

myAsyncFn();
