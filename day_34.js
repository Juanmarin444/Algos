// String.concat
// String.concat(str1 , str2, .... strN) - ass string(s) to end of existing one.
// return new string.

function concat(){
  var newString = "";
  for (var i = 0; i < arguments.length; i++) {
    newString += arguments[i];
  }

  return newString;
}

// console.log(concat("cow", 'chicken', 3, 'car', 'l', 7, 'wheenie', 'shield'));
