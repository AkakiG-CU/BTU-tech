// try {
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
//   throw new Error("TEST");
//   console.log("Hello World");
//   console.log("Hello World");
// } catch (error) {
//   console.error(error);

//   console.error("RAGACA. IRIRA");
// }

// function test(first, second) {
//   const a = first;
//   const b = second;
//   const c = a + b;

//   console.log("RESULT IN TEST FUNCTION - ", c);

//   return function () {
//     return function () {
//       return function () {
//         return function () {
//           console.log("FIFTH");
//         };
//       };
//     };
//   };
// }

// const a = test(10, 20)()();

// const b = a();

// b();

// (function (a, b) {
//   console.log(a + b);
// })(10, 20);

// function test2(cb) {
//   cb(10, 20);
// }

// test2(test);

// console.log(test(10, 5));

// const func = function () {
//   const a = 20;
//   const b = 7;
//   const c = a - b;

//   console.log("RESULT IN TEST FUNCTION - ", c);
// };

// func();

// const a = ["asd", "dgf", "kljh"];
// a.push("jajsd");

// console.log(a.length);

// // a.unshift("rty");
// // a.push("qwe");

// // console.log(a[1]);
// console.log(a);

// const a = ["asd", "dgf", "kljh", "aqwe", "bvcx", "asd"];
// const b = [1, 3, 8, 5, 9, 12];

// // const c = a.slice(1, 3);

// const d = b.filter(function (x) {
//   return x > 6;
// });

// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);

// // const e = [1, "asjkh", true, 1, 4, ["asd", 7]];

// // // console.log(e[3][1]);
// // console.log(e.flat());

// const f = [5, "asd", 9, 2];

// console.log(f.join(" : [ ] : "));

// console.log(f);

const g = [1, 5, 3, 8, 0];

// g.sort(function (a, b) {
//   return b - a;
// });

// const h = g.reverse();

// console.log(h);

for (let i = 0; i < g.length; i++) {
  console.log(i, g[i]);
}

for (const val of g) {
  console.log(val);
}

for (const ind in g) {
  console.log(ind);
}

g.forEach(function (x) {
  console.log(x);
});
