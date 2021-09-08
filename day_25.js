////// Parentheses Validation //////
// Create an algorithm to validate that all the parentheses are open and closing Pairs


function parensValidate(string){
  var openedPairs = 0;
  for (var i = 0; i < string.length; i++) {
    if (openedPairs === 0 && string[i] === ")") {
      return "Invalid Parentheses Pairs."
    } else if (openedPairs >= 0 && string[i] === "(") {
      openedPairs += 1;
      console.log("t", string[i], i, openedPairs);
    } else if (openedPairs >=0 && string[i] === ")") {
      openedPairs -= 1;
      console.log("b", string[i], i, openedPairs);
    }
  }
  if (openedPairs === 0) {
    return "All Parentheses are Valid Pairs."
  } else if (openedPairs > 0) {
    return "Invalid Parentheses Pairs. 2"
  }
}

// console.log(parensValidate("(()()()()()())"));
