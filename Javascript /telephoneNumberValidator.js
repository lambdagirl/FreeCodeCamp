function telephoneCheck(str) {
    let reg = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/
    return reg.test(str);
  }
  
  telephoneCheck("555-555-5555");
  
  //note:
  //(1\s?)? allows for “1” or "1 " if there is one.
  //x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.