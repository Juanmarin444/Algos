////// Count Non-Spaces //////
// Accept a string and return the number of non-spaces characters
// found in the string. For example, given
// "Honey pie, you are driving me crazy", return 29(not 35).
myStr = "Honey pie, you are driving me crazy"
function countNonSpaces(string){
  var strArr = string.split(' ');
  var newStr = strArr.join('');
  console.log(newStr.length);
}
// countNonSpaces(myStr);
