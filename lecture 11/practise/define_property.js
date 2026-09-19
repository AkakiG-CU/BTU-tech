// Object.defineProperty example
let user = {};
let _age = 20;
Object.defineProperty(user, 'age', {
  get: function() {
    console.log('Getter called!');
    return _age;
  },
  set: function(value) {
    console.log('Setter called with:', value);
    if (value > 0) {
      _age = value;
    } else {
      console.log('Age must be positive');
    }
  },
  enumerable: true,
  configurable: true,
  writable: true
});
