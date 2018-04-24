function sumAll(arr) { 
  var newArr;
  if (arr[0] > arr[1]) {
    newArr = arr.reverse();
  } else {
    newArr = arr;
  }
  
  var i = newArr[0];
  var sum = 0;
  while (i<=newArr[newArr.length-1]) {
    sum += i;
    i++;
  }
  
  return sum;
}

sumAll([1, 4]);
sumAll([5,10]);
