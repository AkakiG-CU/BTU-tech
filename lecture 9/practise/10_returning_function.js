// Returning Function
function fn(a, b) {
  return function () {
    console.log('Inner Function');
  };
}

fn()();
