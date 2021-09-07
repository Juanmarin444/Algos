////// Remove Even-Length String //////
// Build a standalone function to remove strings of even lengths
// from a given array. For an array containing
// ["Nope!", "Its", "Kris", "starting", "with", "K!","(instead",
// "of", "Chris", "with", "C)", "."]

function removeAt(array, index){
  for (var i = index; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length--;
  return array;
}

function removeEvenLens(array){
  for (var i = 0; i < array.length; i++) {
    var string = array[i];
    if (string.length % 2 === 0) {
      removeAt(array, i);
      i--;
    }
  }
  return array;
}
var myArray = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]
// console.log(removeEvenLens(myArray));
