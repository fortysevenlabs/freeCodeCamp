function truthCheck(collection, pre) {
  // Is everyone being true?
  // included NaN in the invalid array first
  // var invalid = [null, undefined, 0, ""];
  // but then learnt you can't do arr.indexOf(NaN)
  // NaN is technically a number but evaluates to truthy so
  // updated the "val" check to not use invalid.indexOf(val) to
  // just check truthiness
  return collection.every(function(obj){
    return Object.keys(obj).indexOf(pre) > -1 && 
           Object.values(obj).every(function(val){
             return val;
           });
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"single": "double"}, {"single": NaN}], "single");

