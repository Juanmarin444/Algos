////// Longest Palidrome //////
// For this challenge, we will look not only at the entire string provided,
// but also at the substrings within it. Return the longest palindrome substring.
// Given "what up, daddy-o?", return "dad". Given "uh... not much" return "u".
// Include spaces as well (i.e. be strict, as in previous challenge): Given
// "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or
// shorter than complete words are OK.

// Second: re-solve the above problem, but ignore spaces, tabs, returnsm capitalization
// and puncuation Given "Hot puree eruption!" return "tpureeerupt".

function longestPal(string){
  if(string.length < 1 || string === null){
    return '';
  }
  let longest = "";
  for(var i = 0; i < string.length; i++){
    let oddPalindrome = expandFromCenter(string, i, i);
    let evenPalindrome = expandFromCenter(string, i - 1, i);
    if(oddPalindrome.length > longest.length){
      longest = oddPalindrome;
    }
    if(evenPalindrome.length > longest.length){
      longest = evenPalindrome;
    }
  }
  return longest;
}

// console.log(longestPal("theracecarr"));

function expandFromCenter(str, left, right){
  let i = 0;
  while(str[left - i] && str[left - i] === str[right + i]){
    i++;
  }
  i--;
  return str.slice(left - i, right + i + 1);
}
