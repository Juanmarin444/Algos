////// String: Reverse //////
// Implement reverseString(str) that, reverses the order
// of a given string. Don't use built in function reverse().

function reverseString(string){
  var stringArray = string.split('');
  for(var i = 0; i < stringArray.length / 2; i++){
    var temp = stringArray[i];
    stringArray[i] = stringArray[stringArray.length - 1 - i];
    stringArray[stringArray.length - 1 - i] = temp;
  }
  var newString = stringArray.join('');
  console.log(newString);
}
// reverseString("creature");
