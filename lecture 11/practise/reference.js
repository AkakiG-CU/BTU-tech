// Reference vs value
let obj1 = { name: 'Alice' };
let obj2 = obj1; // obj2 references the same object as obj1
console.log(obj1.name); // Alice
console.log(obj2.name); // Alice
obj2.name = 'Bob';
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob
obj1.age = 25;
console.log(obj2.age); // 25
