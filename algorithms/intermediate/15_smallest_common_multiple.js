function smallestCommons(arr) {
  // [smaller_num, larger_num]
  if (arr[0] > arr[1]) {
    arr.reverse();
  }
  
  // get inclusive range fo [a, b]
  var range = [];
  for (var i=arr[0]; i<=arr[1]; i++){
    range.push(i);
  }
  
  // get largest multiple to test till
  var largest = range.reduce(function(acc, num){
    return acc*num;
  });
  
  // not happy with this
  for (var j=arr[arr.length-1]; j<=largest; j++){
    // noprotect
    var isSmallestMultiple = range.every(function(n){
      return j%n == 0;
    });
    
    if (isSmallestMultiple){
      return j;
    }
  }
}

smallestCommons([23, 18]);
