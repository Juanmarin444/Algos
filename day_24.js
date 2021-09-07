////// Integer to Roman Numerals //////
// Given a positive integer that is less than 4000, return a string
// containing that value in Roman numeral representation. In this
// representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500,
// and M = 1000
// **Remember that 4 is IV, 349 is CCCIL and 444 is  CDXLIV.

function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '',
      i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

function manyRnums(start, end){
  for (var i = start; i <= end; i++) {
    console.log(romanize(i));
  }
}
// manyRnums(0, 11);

function romanize2(num){
  var legend = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1},
  rNum = '';
  for (var i in legend) {
    while (num >= legend[i]){
      rNum += i;
      num -= legend[i];
    }
  }
  return rNum;
}
// console.log(romanize2(888));

function deRomanize(rNum){
  for(var i = 0; i < rNum.length; i++){
    console.log(rNum[i]);
  }
}

// deRomanize("DCCCLXXXVIII");
