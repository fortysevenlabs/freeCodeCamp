function diffArray(arr1, arr2) {
  // exits in arr1 but not in arr2
  var a = arr1.filter(function(ele){
    console.log(arr2.indexOf(ele));
    return arr2.indexOf(ele) < 0;
  });
  // exits in arr2 but not in arr1
  var b = arr2.filter(function(ele){
    return arr1.indexOf(ele) < 0;
  });
  // concatenate a and b
  var newArr = a.concat(b);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
