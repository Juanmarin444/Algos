function minMax(array){
  var largest = array[array.length - 1],
  smallest = array[array.length - 1],
  total = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
    if (array[i] < smallest) {
      smallest = array[i];
    }
    total += array[i];
  }
  var avg = total / array.length - 1;
  return {"Largest": largest, "Smallest": smallest, "Average": avg};
}

// console.log(minMax([2, 4, 1, 67, 100, 3, 1]));
