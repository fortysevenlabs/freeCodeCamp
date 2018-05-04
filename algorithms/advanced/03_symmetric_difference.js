function sym(args) {
  var args_arr = Array.from(arguments);
  
  var wtf = args_arr.reduce(function(acc, currVal){
    var newAcc = [];
    for (var i=0; i < acc.length; i++){
      if (newAcc.indexOf(acc[i]) == -1){
        newAcc.push(acc[i]); 
      }
    }
    
    var newCurrVal = [];
    for (var j=0; j < currVal.length; j++){
      if (newCurrVal.indexOf(currVal[j]) == -1){
        newCurrVal.push(currVal[j]); 
      }
    }

    newCurrVal.forEach(function(ele){
      if (newAcc.indexOf(ele) < 0) {
        newAcc.push(ele);
      } else {
        newAcc.splice(newAcc.indexOf(ele), 1);
      }
    });
   
    return newAcc.sort();
  });

  return wtf;

}

// sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
