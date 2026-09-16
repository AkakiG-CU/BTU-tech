// const fn2 = (x, y) => {
//   return x - y;
// };

// const fn3 = (x, y) => x - y;

// fn2(10, 20);

// const a = [5, 7, 8, 3];

// // function filterfn(x) {
// //   return x > 6;
// // }

// const b = a.filter((x) => x > 7);

// console.log(b);

// function calcCurr(amount, rate = 2.6) {
//   return amount * rate;
// }

// const amountCalculated = calcCurr(100, 2.7);

// console.log(amountCalculated);

// const pass = 'paroli'
// let valid = true;

// if (pass.length<8) {
//     valid = false
// } else if (
//     // tu moicavs simboleobe
// ) {
//     valid = false
// }

// if (valid) {
//     ajsdjhashkdjas
// }

// const a = [7, 8, 9, 2, 3, 11, 56, 5];

// // a.filter((x) => x > 7);

// const predFn = (x) => x > 7;

// function filterFn(list, pred) {
//   const result = [];

//   for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);

//     const valid = pred(list[i]);

//     if (valid) {
//       result.push(list[i]);
//     }
//   }

//   return result;
// }

// function akjsdhkjashd(number) {
//   const a = number + 2;
//   const b = a * 3;
//   const c = b - 20;

//   return c > 0;
// }

// const filteredList = filterFn(a, akjsdhkjashd);

// console.log(filteredList);

// const text = "username@gmail.com";

// const index = text.indexOf("hello world");
// const include = index > -1;

// console.log(include);

// console.log(text.split("@"));

// console.log(text);

// console.log(text.replace("@gmail.com", "@icloud.com"));

// console.log(text[5]);

// // "  test@ gmail.com   " - trim() -> "test@ gmail.com"

// const a = "Wow Hello World";
// const b = a.toLowerCase();

// console.log(b.includes("world"));

const a = "asdasasdasdasdas@icloud.com";

const regex = /[a-zA-Z0-9._-]{12,}@icloud\.com$/;

console.log(regex.test(a));
