function addTogether() {
  var args = Array.from(arguments);
  allArgsNumbers = args.every(function(n){
    return typeof(n) == "number";
  });
  
  if (!allArgsNumbers) {
    return undefined;
  } else if (args.length == 1) {
    var x = args[0];
    // TODO deep dive into closures later
    // A closure is a persistent scope which 
    // holds on to local variables even after 
    // the code execution has moved out of that block.
    return function(y){ 
      if (typeof(y) == "number") {
        return x + y;         
      } else {
        return undefined;
      }
    };
  } else {
    return args.reduce(function(acc, currVal){
      return acc+currVal;
    });
  }
}

addTogether(2,3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2)(3);
addTogether(2)([3]);
