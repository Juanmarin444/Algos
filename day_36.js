// String.trim
// String.trim() - remove whitespace (spaces, tabs, newlines) from both sides,
// and return a new string. Example: " \n hello goodbye \t ".trim() should return
// "hello goodbye".

var myString = " \n hello goodbye \t "
myString = myString.trim();
// console.log(myString);


console.log("++++++++++++++++++++++");

function isWhiteSpace(s) {
  return /\s/g.test(s);
}

function removeIndex (string, index) {
  string = string.split('');

  for (var i = index; i < string.length; i++) {
    string[i] = string[i + 1];
  }
  string.length -= 1;
  string = string.join('')
  return string;
}

function trim (string) {
  var newS = "";
  for (var i = 0; i < string.length; i++) {
    if (isWhiteSpace(string[i])) {
      string = removeIndex (string, i);
    }
  }
  return string;
}

console.log(trim(" \n hello goodbye \t "));
