////// Remove Blanks //////
// Create a function that, given a string, returns all of that
// string's contents, but without blanks. If given the string
// " Pl    ayTha     tF    u   nkyM   usi    c    ", return
// "PlayThatFunkyMusic"
var myStr = " Pl    ayTha     tF    u   nkyM   usi    c    "
function removeBlanks(str){
  var strArr = str.split(" ");
  var strChanged = strArr.join("");
  console.log(strChanged);
}
// removeBlanks(myStr);
