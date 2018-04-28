function dropElements(arr, func) {
  // Drop them elements.
  for(var i=0; i<arr.length; i++){
    if (func(arr[i])){
      return arr.slice(i);
    } else {
      console.log(arr[i]);
    }
  }
  return [];
}

dropElements([1, 2, 3, 4], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;})
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
