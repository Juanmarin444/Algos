// String.slice
// String.slice(start, end) - extract part of a string and return a new one. start
// and end are indices into the string, with the first character at index 0. End param
// is optional and if present, refers to one beyond the last character to include.

//             "0123456789"
var myString = "Funny cows"

// console.log( myString.slice (-6, -1));

function slice (string, start, end) {
  var newString = "";
  end = end || string.length;
  for (var i = start; i < end; i++) {
    newString += string[i];
  }
  return newString;
}

function slice2 (string, start, end) {
  var newString = "";
  end = end || string.length;
  if (start < 0) {
    start = start + string.length;
  }
  if (end < 0) {
    end = end + string.length;
  }
  for (var i = start; i < end; i++) {
    newString += string[i];
  }
  return newString;
}
// console.log("++++++++++++++++++++++");

// console.log(slice2 (myString, -6, -1));
