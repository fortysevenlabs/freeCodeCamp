// can we do this better?
function getFibs(num){
  var fib = [1, 1];
 
  for(var i=0; i<=num; i++){
    fib.push(fib[i] + fib[i+1]);
  }
  
  return fib.filter(function(n){
    return (n <= num) && (n%2 != 0);
  });
}

function sumFibs(num) {
  fib_series = getFibs(num);
  
  return fib_series.reduce(function(acc, currVal){
    return acc + currVal;
  });
}

sumFibs(1000);
