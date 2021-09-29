// Associative Array: Number of Value (without .length)
// Without using the .length property that is present on
// all arrays, determine and return the number of values in the given array.
// If we were to do this on a numerical arraym we might check to see whether the
// element at a certain numerical index was undefined. Unfortunately, we cant do that
// here because the keys dont have any sort of predictable order of first value.

// So, for object { band: "Trs", style: "country", album: "668"}
// you should return the value 3 because there are 3 keys in this object: band style album

function amountVals(obj){
  var count = 0;
  for (key in obj){
    count++;
  }
  return count;
}

// console.log(amountVals({ band: "Trs", style: "country", album: "668"}));
