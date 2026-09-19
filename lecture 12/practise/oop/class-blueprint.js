// Class blueprint
class Car {
  name;
  constructor(_name) {
    this.name = _name;
  }
}
const car1 = new Car('bmw');
const car2 = new Car('mercedes');
console.log(car1, car2);
