// Static vs Instance methods
class Car {
  showBrand() {
    console.log(this.brand);
  }
  static companyInfo() {
    console.log(this);
    console.log('All cars are made by Car Factory.');
  }
}
Car.companyInfo(); // Static method
const car = new Car();
car.brand = 'BMW';
car.showBrand(); // instance method
