function uniteUnique(arr) {
  var new_arr = [];
  // since assertion tests are not passing array
  var args = Array.from(arguments);
  
  args.forEach(function(internal_array){
    return internal_array.forEach(function(innermost_ele_or_array){
      if (new_arr.indexOf(innermost_ele_or_array) < 0){
         new_arr.push(innermost_ele_or_array);
      }
    });
  });
  
  return new_arr;
}

// was it supposed to be single array agument?
// like [[1, 3, 2], [5, 2, 1, 4], [2, 1]]
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
