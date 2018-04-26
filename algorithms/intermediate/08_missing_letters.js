function fearNotLetter(str) {
  var missing_char;

  for(var i=0; i<str.length; i++){
    var curr_char = str.charCodeAt(i);
    var next_char = str.charCodeAt(i+1);
    
    if ((next_char-curr_char) > 1) {
      missing_char = String.fromCharCode(curr_char+1);
    }
  }
  
  return missing_char;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
