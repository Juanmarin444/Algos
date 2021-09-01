////// Acronyms //////
// Create a function that, given a string, returns the string's
// acronym(first letters only, capitalized).
// Given " there's no free lunch - gotta pay yer way. " return
// "TNFL-GPYW". Given "Live from New York, it's Saturday Night!"
// return "LFNYISN".

function acro(myStr){
  var strArr = myStr.split(" ");
  var newArr = [];
  for(var i = 0; i < strArr.length; i++){
    for(var j = 0; j < 1; j++){
      console.log(strArr[0]);
      newArr.push(strArr[i][0]);
    }
  }
  newArr = newArr.join('');
  console.log(newArr);
}
myStr = " there's no free lunch - gotta pay yer way. "
// acro(myStr);
