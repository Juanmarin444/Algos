//// what is a js promise? //////
// A promis is a container
// A container used for handling the result of an asynchronous operation
// What is an Asynchronous operation?
// An asynchronous operation is operations that do not follow the stack of operations
// and execute along with with the stack any way even if there is a different operation
// currently running.
// Promises in js are similar to real life promises.
//
// simple example of promises.
// Example 1:

let promiseToCleanTheRoom = new Promise(function(resolve, reject){
  //Cleaning Room Code
  let isClean = false;
  if(isClean) {
    resolve('clean');
  } else {
    reject('not clean');
  }
});

promiseToCleanTheRoom.then(function(fromResolve){
  console.log('The Room is ' + fromResolve);
}).catch(function(fromReject){
  console.log('The Room is ' + fromReject);
})

// Example 2: YOU HAVE TO FINISH SOMETHING BEFORE YOU HAVE TO START SOMETHING ELSE

let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve(', cleaned the room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ', removed garbage');
  });
};

let winIceCream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ', and won icecream')
  });
};

cleanRoom().then(function(result) {
  return removeGarbage(result);
}).then(function(result) {
  return winIceCream(result);
}).then(function(result) {
  console.log('Finished' + result);
})

// Example 3: DOING ALL THE THOSES PROMISES IN PARALLEL NOT WAITING FOR ANY TO FINISH.

Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(function() {
  console.log('All finsihed.');
});

// Example 4: ONLY NEED ONE OF THEM TO FINISH ANY OF THEM

Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then(function() {
  console.log('One of the tasks was finsihed.');
})
