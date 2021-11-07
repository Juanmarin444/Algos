///// Spread Operator and Rest Operator For an Undetermined Amount of Arguments /////

//// THE REGULAR WAY TO USE REST ////
function minOne() {
  var numbers = Array.prototype.slice.call(arguments);
  return Math.min.apply(null, numbers);
}
console.log(minOne(10, 92, 17, 31, 22), 'this is the regular way.');

//// ES6 REST WAY (...) TO USE REST////
function minTwo(...numbers) {
  return Math.min.apply(null, numbers);
}
console.log(minTwo(10, 92, 17, 31, 22), 'this is using es6 REST');

////// NOTES AND TIPS FOR REST (...) //////
// ...givenName will pick up any passed content that doesnt have a named parameter.
// ...givenName will always be an array, even if the function is invoked without any parameters.
// ...Rest doesn't need to be the only parameter, but it does need to be the last.

//// In our example above we actually didn't need to use the apply method since the spread of ...numbers will do it for us.
function min(...numbers) {
  return Math.min(...numbers); // ...numbers spreads the elements to our call to Math.min
}

/// DESTRUCTURING WITH SPREAD OPERATOR

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [ firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(otherAnimals);
const [ ...myAnimals ] = animals;
console.log(myAnimals);
console.log(secondAnimal);
console.log(firstAnimal);
