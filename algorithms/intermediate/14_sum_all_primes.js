function sumPrimes(num) {
  var range = [];
  for (var i=2; i<=num; i++){
    range.push(i);
  }
  
  // not happy with this
  var primes = [];
  for (var j=0; j<=range.length; j++){
    // noprotect
    var divisible_by_array = range.filter(function(n){
      return range[j]%n == 0;
    });

    if (divisible_by_array.length == 1){
      primes.push(divisible_by_array[0]);
    }
  }
  
  return primes.reduce(function(acc, currVal){
    return acc+currVal;
  });
}

sumPrimes(10);
sumPrimes(977);
