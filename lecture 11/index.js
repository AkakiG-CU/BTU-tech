// const arr = [3, 1, 6, 8];

// // index -  0, 1, 2, 3
// // value  - 3, 1, 5, 8

// const account = {
//   amount: 8.97,
//   class: "VISA",
//   blocked: true,
//   account_number: "GEjkashdkjahsjkdh",
//   cardholder: "JOHN DOE",
//   valid_date: "12/08/2028",
//   //   ...
// };

// // OBJ
// // key: value

// console.log(account);

// const account1 = new Object({
//   amount: 8.97,
//   class: "VISA",
//   blocked: true,
//   account_number: "GEjkashdkjahsjkdh",
//   cardholder: "JOHN DOE",
//   valid_date: "12/08/2028",
//   //   ...
// });

// console.log(account1);

// const account2 = Object.create({
//   amount: 8.97,
//   class: "VISA",
//   blocked: true,
//   account_number: "GEjkashdkjahsjkdh",
//   cardholder: "JOHN DOE",
//   valid_date: "12/08/2028",
// });

// const product = {
//   id: 12,
//   price: 9,
//   quantity: 20,
//   name: "Laptop",
// };

// // const cart_product = {
// //   id: 12,
// //   name: "laptop",
// //   requested_quantity: 2,
// // };

// const cart_p = { ...product, cart_id: 5, name: "macbook" };

// console.log(cart_p);

// const account = {
//   amount: 8.97,
//   class: "VISA",
//   blocked: true,
//   account_number: "GEjkashdkjahsjkdh",
//   cardholder: "JOHN DOE",
//   valid_date: "12/08/2028",
//   //   hello: function() {
//   // 	console.log(‘hello’)
//   // }
//   validate_otp: function (input) {
//     if (input === "1234") {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   transfer: function (transfer_amount) {
//     console.log(this.amount);
//     if (this.amount > transfer_amount) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   //   ...
// };

// const account2 = { ...account, amount: 100, class: "MASTERCARD" };

// console.log(account.transfer(20));

// account.generate_otp = function () {
//   // rogor uda dagenerides otp, rnaadom 4 cifri

//   return "1234";
// };

// account.blocked = false;

// const generated_otp = account.generate_otp();

// const valid_otp = account.validate_otp("1234");

// console.log(generated_otp);

// console.log(valid_otp);

// console.log(account);

// console.log(account.transfer(9));

// const account = {
//   amount: 8.97,
//   class: "VISA",
//   blocked: true,
//   account_number: "GEjkashdkjahsjkdh",
//   cardholder: "JOHN DOE",
//   valid_date: "11/02/2031",
//   //   hello: function() {
//   // 	console.log(‘hello’)
//   // }
//   validate_otp: function (input) {
//     if (input === "1234") {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   transfer: function (transfer_amount) {
//     console.log(this.amount);
//     if (this.amount > transfer_amount) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   //   ...
// };

// // account.PIN = "1111";

// Object.defineProperty(account, "amount", {
//   //   value: "1111",
//   //   get: function () {
//   //     const date = this.valid_date;
//   //     const date_parts = date.split("/");
//   //     return date_parts[2];
//   //   },
//   //   set: function () {},
//   get: function () {
//     return this._amount;
//   },
//   set: function (value) {
//     if (value < 0) {
//       console.error("AMOUNT MUSTBE MORETHAT 0");
//     } else {
//       this._amount = value;
//     }
//   },
// });

// console.log(account);

// // console.log(account.year);

// account.amount = 5;
// account.amount = -5;

// console.log(account.amount);

const account = {
  amount: 8.97,
  card_class: "VISA",
  blocked: true,
  account_number: "GEjkashdkjahsjkdh",
  cardholder: "JOHN DOE",
  valid_date: "11/02/2031",
  //   hello: function() {
  // 	console.log(‘hello’)
  // }
  validate_otp: function (input) {
    if (input === "1234") {
      return true;
    } else {
      return false;
    }
  },
  transfer: function (transfer_amount) {
    console.log(this.amount);
    if (this.amount > transfer_amount) {
      return true;
    } else {
      return false;
    }
  },
  //   ...
};

// amount class, account_number

// const amount = account.amount;
// const class1 = account.class;
// const faccount_number = account.account_number;

const { amount, card_class, account_number, cardholder, blocked } = account;

console.log(amount);

// console.log(amount_available);

const arr = [5, 9, 2];

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

const [a, b, c] = arr;

console.log(b);

function transfer({ amount, reciever, bank, pin }) {
  //   console.log(amount);
  // ajkshdakjsnbdjkn
}

// transfer(10, "GE902", "BOG", "111");
transfer({ pin: "1111", amount: 10, reciever: "GE12312321", bank: "BOG" });
