//.... Array: Push Front ....//
// Given array and an additional value, insert the value at the beginning of the
// array. Do this without using any built-in array methods.

function pushFront(array, value){
  array.length = array.length + 1;
  for(var i = array.length - 1; i >= 0; i--){
    array[i] = array[i - 1];
    if(i === 0){
      array[i] = value;
    }
  }
  return array;
}
console.log(pushFront([1,2,3,4,5], 0));
