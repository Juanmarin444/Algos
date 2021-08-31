////// String: Get Digits //////
// Create a JavaScript function that given a string, returns
// the integer made from the string's digits. Given
// "0s1a3y5w7h9a2t4?6!8?0", the function should return the num
// 1357924680
var myStr = "0s1a3y5w7h9a2t4?6!8?0";
var nums = ["0","1","2","3","4","5","6","7","8","9"];
function getDigits(str){
  var nums = ["0","1","2","3","4","5","6","7","8","9"];
  var strArr = str.split('');
  var myNum = [];
  for(var i = 0; i < strArr.length; i++){
    for(var j = 0; j < nums.length; j++){
      if(strArr[i] === nums[j]){
        myNum.push(strArr[i]);
      }
    }
  }
  myNum = myNum.join("");
  myNum = Number(myNum);
  console.log(myNum);
}
// getDigits(myStr);
