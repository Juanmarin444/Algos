//.... Array: Swap Pairs ....//
// Swap positions of successive pairs of values of given array. If length is odd,
// do not change the final element. For [1, 2, 3, 4], return [2, 1, 4, 3]. for
// example, change input ["pizza", true, 42] to [true, "pizza", 42]. Do this without
// using any built-in array methods.

function swapPairs(array){
  if(array.length % 2 !== 0){
    var length = array.length - 1;
  } else {
    var length = array.length;
  }
  for(var i = 0; i < length; i++){
    var temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
    i++;
  }
  return array;
}

// console.log(swapPairs([1,2,3,4]));
// console.log(swapPairs([1,2,3,4,5]));
