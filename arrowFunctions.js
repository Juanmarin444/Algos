// Arrow functions ////

// Ex: 1 The Regular Way
var sayHello1 = function(name) {
  console.log('hello ' + name + '!');
}
// or
function sayHello2(name) {
  console.log('hello ' + name + '!');
}
// THE ES6 WAY
const sayHello3 = (name) => {
  console.log(`hello ${name}!`);
}
// SINGLE PARAMETERS DONT NEED PARANTHESIS
// SINGLE STATEMENT FUNCTION BODIES DONT NEED CURLY BRACES

// REFINED ES6 FUNCTION
const sayHello4 = name => console.log(`Hello ${name}!`);
sayHello1('John');
sayHello2('John');
sayHello3('John');
sayHello4('Juan');


//// example 2: IMPLICIT RETURNS
var square = function(n) {
  return n * n;
};
// will become

let square2 = n => n * n;

const multThrice1 = x => y => z => x * y * z;
console.log("ES6: ", multThrice1(2)(3)(2)); // 12

// ES5 version of the above
var multiplyThrice2 = function(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    }
  }
}

console.log("ES5: ", multiplyThrice2(2)(3)(2)); // 12
