// // Not Used
// function allSourceKeysExistInObject(object, source){
//   var o = Object.keys(object);
//   var s = Object.keys(source);
  
//   var x = [];
//   x = s.filter(function(ele){
//     console.log(typeof(ele));
//     return o.indexOf(ele) >= 0;
//   });
  
//   // JavaScript Array comparisons are not "whatever"
//   // console.log(o);
//   // console.log(s);
//   // console.log(x); 
//   // console.log(x == s);
//   return x == s;
// }

function sourceInObject(object, source){
  var sourceExistsObjects = Object.keys(source).filter(function(ele){
    return (object.hasOwnProperty(ele) && object[ele] == source[ele]);
  });
  return (sourceExistsObjects.length == Object.keys(source).length);
}

function whatIsInAName(collection, source) {
  var valid_objects = collection.filter(function(object){
    return sourceInObject(object, source);
  });
  return valid_objects;
}

whatIsInAName([
  { first: "Romeo", last: "Montague" }, 
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }
  ], { last: "Capulet" });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
