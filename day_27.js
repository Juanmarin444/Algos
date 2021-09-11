////// String: Is Palindrome //////
// Create a function that returns a boolean whether the string is a strict Palindrome
// For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and
// capitalization: if given "Dud" or "oho!" return false.
// Second: now do ignore white spaces(spaces, tabs, returns), capitalization and punctuation.

function isPalindrome(string){
  for (var i = 0; i < string.length; i++) {
    if(string[i] !== string[string.length - 1 - i]){
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("cat !"));
// console.log(isPalindrome("ra ce ca r!"));

function isPalidrome2(string) {
  string = string.split(" ");
  string = string.join("");
  string = string.toLowerCase();
  var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  for (var i = 0; i < string.length; i++) {
    for (var k = 0; k < punctuation.length; k++) {
      if (string[i] === punctuation[k]) {
        string = removeChar(string, i);
      }
    }
  }
  for (var i = 0; i < string.length; i++) {
    if(string[i] !== string[string.length - 1 - i]){
      return false;
    }
  }
  return true;
}

// console.log(isPalidrome2("asdF!aSdf!"));
// console.log(isPalidrome2("!rac@ec#ar$"));
