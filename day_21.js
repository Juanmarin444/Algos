////// Remove Shorter String //////
// Given a string array and value (length), remove any strings shorter
// than length from the array.
var mystrings = ["cow", "kitten", "chicken", "dog", "giraffe", "tennis"];
function removeShorter(array, val){
  for(var i = 0; i < array.length; i++){
    if(array[i].length < val){
      for(var j = i; j < array.length; j++){
        array[j] = array[j + 1];
      }
      array.length--;
    }
  }
  console.log(array);
}
// removeShorter(myStrings,4);
