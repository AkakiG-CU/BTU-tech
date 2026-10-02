// Functions in TypeScript
function test(a: number): void {
  console.log(a);
}

test(42);

// Function types
let fn: (a: number) => void;
fn = (a: number) => {
  console.log('tst', a);
};
fn(7);
