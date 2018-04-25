function myReplace(str, before, after) {
  // problem description could have been better
  // only first char case need to be supported
  var before_case = before.split('')[0];
  var new_after;
  
  if (before_case == before_case.toUpperCase()){
    split_after = after.split('');
    new_after = split_after[0].toUpperCase() + split_after.splice(1).join('');
  } else {
    new_after = after;
  }
  

  var re = new RegExp(before, "g");
  var new_str = str.replace(re, new_after);
  return new_str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");
