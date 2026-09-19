// Getters and Setters
class Car {
  brand;
  model;
  get fullModel() {
    return `${this.brand} is ${this.model}`;
  }
  set fullModel(value) {
    const [brand, model] = value.split(' ');
    this.brand = brand;
    this.model = model;
  }
}
const car = new Car();
car.fullModel = 'Toyota Corolla';
console.log(car.fullModel); // Toyota is Corolla
