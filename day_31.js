// zip array into map
// Associative arrays are sometimes called maps because a key (string)
// maps to a value. Given two arrays,create an associative array containing
// keys of the first, and values of the second. for arr1 = ["abc", 3, "yo"] and
// array2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}

function zip(array1, array2){
  var obj = {},
  length = 0;

  if (array1.length >= array2.length) {
    length = array1.length;
  } else if (array1.length < array2.length) {
    length = array2.length;
  }
  for (var i = 0; i < length; i++) {
    obj[array1[i]] = array2[i];
  }
  return obj;
}

// console.log(zip(["abc", 3, "yo", "extra"], [42, "wassup", true]));
