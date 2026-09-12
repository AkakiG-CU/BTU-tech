// Function Declaration vs Expression (hoisting)

// Declaration is hoisted – can call before it's defined
console.log('Calling declaration before definition:', greetDecl());
function greetDecl() {
  return 'Hello';
}

// Expression is not hoisted – calling before assignment throws
try {
  console.log('Calling expression before assignment:', greetExpr());
} catch (e) {
  console.log(e.name + ': ' + e.message);
}
var greetExpr = function () {
  return 'Hello';
};
console.log('Calling expression after assignment:', greetExpr());
