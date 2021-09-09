////// Braces Valid
// Given a sequence of Parentheses, braces and brackets, determine whether it
// is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true.
// "D(i{a}l[ t]o)n{e" => false. "a(l)s[o (n]o{t) o}k" => false.

function bracesValid(string){
  var stack = [];
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      stack.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      var last = stack.pop();
      if (string[i] !== map[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}
