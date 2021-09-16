// Associative Arrays (Objects)

// As before, given a number of U.S. cents, return the optimal configuration of
// coins, in an object.

// Given: 348 return: {Quaters: 13, Dimes: 2, Nickels: 0, Pennies: 3}

function loseChangeObj(amount){
  var change = {};
  if (amount / 25 > 1) {
    change["Quaters"] = Math.floor(amount / 25);
    amount = amount - Math.floor(amount / 25) * 25;
  }
  if (amount / 10 > 1) {
    change["Dimes"] = Math.floor(amount / 10);
    amount = amount - Math.floor(amount / 10) * 10;
  }
  if (amount / 5 > 1) {
    change["Nickels"] = Math.floor(amount / 5);
    amount = amount - Math.floor(amount / 5) * 5;
  }
  if (amount / 1 > 1) {
    change["Pennies"] = Math.floor(amount / 1);
    amount = amount - Math.floor(amount / 1) * 1;
  }
  return change;
}

console.log(loseChangeObj(348));
