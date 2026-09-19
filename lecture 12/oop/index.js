// class Car {
//   name;
//   model;
//   color;
//   static steeringSide = "left";

//   constructor(carName, carColor, carModel) {
//     this.name = carName;
//     this.color = carColor;
//     this.model = carModel;
//   }

//   start() {
//     console.log(`${this.name} STARTED`);
//   }

//   brake(initial, final) {
//     const difference = initial - final;

//     console.log(`LOST ${difference}kph`);
//   }

//   static getVin() {
//     console.log(this);

//     console.log("YOU HAVE TO CHECKSTICKE ON THE DRIVERS DOOR");
//   }

//   get fullName() {
//     return `WE HAVE ${this.color} ${this.name} ${this.model} car.`;
//   }

//   set fullName(input) {
//     const splittedInput = input.split(" ");

//     const [name, model] = splittedInput;

//     this.name = name;
//     this.model = model;
//   }
// }

// Car.getVin();

// console.log(Car.steeringSide);

// const car1 = new Car("Mercedes", "Green", "S-class");

// car1.color = "yellow";

// car1.fullName = "AUDI RS7";

// console.log(car1);

// const car2 = new Car("BMW", "SILVER", "M5");

// console.log(car2.fullName);

class Vehicle {
  name;
  color;

  brake() {
    console.log("it braked");
  }
}

class car extends Vehicle {
  n_wheels;
}

class bike extends Vehicle {
  n_wheels;
}
