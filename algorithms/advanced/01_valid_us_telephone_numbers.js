function telephoneCheck(str) {
  // Good luck!
 
  var phone_number = new RegExp(/^[1\s]*\d{3}[-\s]*\d{3}[-\s]*\d{4}$|^[1\s]*\(\d{3}\)[-\s]*\d{3}[-\s]*\d{4}$/);

  // Check JavaScript syntax on why this doesn't work!
  // query = "^[1\s]*\d{3}[-\s]*\d{3}[-\s]*\d{4}$|^[1\s]*\(\d{3}\)[-\s]*\d{3}[-\s]*\d{4}$";
  // var phone_number = new RegExp(query, 'g');

  if (phone_number.test(str)){
    return true;
  } else {
    return false;
  }
}


telephoneCheck("5555()5555");
telephoneCheck("55-55-555555");
telephoneCheck("1 (555) 555-5555")
