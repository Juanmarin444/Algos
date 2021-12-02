/// CALL BACK FUNCTION OR HIGHER ORDER FUNCTIONS ///

// In js functions are first class objects
// just like passing in an object into a function you can pass other functions
// into functions. ex: function logThing(myObject); can also be logThing(myFunction);

// EXAMPLE 1: simplest form of a callback function

let x = function() {
  console.log("i am called from inside a function");
};

let y = function(callback) {
  console.log('do something');
  callback();
}

// y(x); /// my function x is being passed through my function y

let add = function(a, b){
  return a+b;
}
let multiply = function(a,b){
  return a*b;
}

let doWhatEver = function(a, b) {
  console.log(`here are your two numbers back ${a}, ${b}`);
}

let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  } else {
    return 'ERROR YO';
  }

};

console.log(calc(2,3,add));  /// func being passed in as arg
console.log(calc(2,3,multiply)); // func being passed in as arg
calc(2,3,doWhatEver) // func being passed in as arg

console.log(calc(2,3,function(a, b) {// func being written inside arg, its name is anonymous function
  return a-b;
}));


var myArr = [
  {num: 5, str: "apple"},
  {num: 7, str: "cabbage"},
  {num: 1, str: "ban"}
];

myArr.sort(function(val1, val2){
  if(val1.str > val2.str) {
    return -1;
  } else {
    return 1;
  }
});

console.log(myArr);
