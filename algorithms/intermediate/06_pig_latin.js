function translatePigLatin(str) {
  vowels = "aeiou".split("");
  consonants = "bcdfghjklmnpqrstvwxyz".split("");
  consonant_clusters = ["bl", "br", "ch", "ck", "cl", "cr", "dr", "fl", "fr", "gh", "gl", "gr", "ng", "ph", "pl", "pr", "qu", "sc", "sh", "sk", "sl", "sm", "sn", "sp", "st", "sw", "th", "tr", "tw", "wh", "wr", "nth", "sch", "scr", "shr", "spl", "spr", "squ", "str", "thr"];
  
  if (consonant_clusters.indexOf(str.slice(0,3)) !== -1) {
    return str.slice(3) + str.slice(0,3) + 'ay';
  } else if (consonant_clusters.indexOf(str.slice(0,2)) !== -1) {
    return str.slice(2) + str.slice(0,2) + 'ay';
  } else if (consonants.indexOf(str.slice(0,1)) !== -1) {
    return str.slice(1) + str.slice(0,1) + 'ay';
  } else if (vowels.indexOf(str[0]) != -1) {
    return str + 'way';
  }
}

translatePigLatin("consonant");
translatePigLatin("glove");
translatePigLatin("eight");
