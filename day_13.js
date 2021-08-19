//.... Array: Pop Front ....//
// Given an array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().

function popFront(array){
  for(var i = 0; i < array.length; i++){
    array[i] = array[i + 1];
  }
  array.length -= 1;
  return array;
}
// console.log(popFront([1,2,3,4,5]));
