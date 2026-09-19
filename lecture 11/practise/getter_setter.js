// Getter and setter in object
let person = {
  firstName: 'Alice',
  lastName: 'Johnson',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  _age: 20,
  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log('Age must be positive!');
    }
  }
};
console.log(person.fullName);
person.age = 25;
