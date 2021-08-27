//.... Array: Remove At ....//
// Given an array and an index into the array, remove and return the array value
// at that index. Do this without using any built-in array methods.

function removeAt(array, index){
  var save = array[index];
  for(var i = index; i < array.length; i++){
    array[i] = array[i + 1];
  }
  array.length -= 1;
  // return save;
  return array;
}
// console.log(removeAt([1,2,3,4], 2));
