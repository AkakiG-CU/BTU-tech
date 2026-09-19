// new keyword creates instance and calls constructor
class Animal {
  constructor(type) {
    this.type = type;
  }
}
const dog = new Animal('dog');
console.log(dog); // { type: 'dog' }
