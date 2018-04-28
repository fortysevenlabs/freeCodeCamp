function steamrollArray(arr) {
  var flattenedArray = [];
  
  // copied from freeCodeCamp solution
  // dive further into recursion
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };
    
  arr.forEach(flatten);
  return flattenedArray;
} 

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);


// didn't work it through but started with a weird approach
// function steamrollArray(arr) {
//   // I'm a steamroller, baby    
//   var flat_array = [];
//   flat = String(arr).split(',');
  
//   flat.forEach(function(n){
//     console.log(typeof(n));
//     if (isNaN(n)){
//       flat_array.push(n);
//     } else if (typeof(n) !== "object") {
//       flat_array.push(Number(n));
//     }
//   });
  
//   console.log(flat);
//   console.log(flat_array);
//   console.log("------------");
//   return flat_array.filter(function(n){
//     return ( typeof(n) == "string" || typeof(n) == "number");
//   });
// }
