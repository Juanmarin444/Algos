//.... Array: Insert At ....//
// Given an array, index, and an additinal value, insert the value into the array
// at the given index. Do this without using any built-in array methods.

function insertAt(array, index, value){
  array.length += 1;
  for(var i = array.length - 1; i >= 0; i--){
    array[i] = array[i - 1];
    if(i === index){
      array[i] = value;
      return array;
    }
  }
}
// console.log(insertAt([1,2,3,4,5], 3, "pizza")); // => [1,2,3,"pizza",4,5]
