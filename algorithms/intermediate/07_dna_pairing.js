function pairElement(str) {
  var arr = [];
  str.split('').forEach(function(char){
    var pair_char;
    // should prefer switch
    if (char == 'C'){
      pair_char = 'G';
    } else if (char == 'G'){
      pair_char = 'C';
    } else if (char == 'A'){
      pair_char = 'T';
    } else if (char == 'T'){
      pair_char = 'A';
    }
    arr.push([char, pair_char]);
  });
  
  return arr;
}

pairElement("GCG");
pairElement("TTGAG");


