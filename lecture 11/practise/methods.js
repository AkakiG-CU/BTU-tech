// Method in object
const myObj = { hello: function() { console.log('hello'); } };
myObj.hello();
// Add method after creation
const myObj2 = {};
myObj2.hello = function() { console.log('hello'); };
myObj2.hello();
// Shorthand method
const myObj3 = {
    hello() { console.log('hello'); }
};
myObj3.hello();
