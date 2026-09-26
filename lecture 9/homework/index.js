function sumProductPrices(products) {
  let sum = 0;
  for (const price of products) {
    sum += price;
  }
  return sum;
}

const products = [3.2, 1.5, 4.0, 6.3, 2.1];
console.log(sumProductPrices(products)); // 17.1