/**
 Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


 */
String.prototype.digit = function () {
  return /^\d$/i.test(this);
};

console.log('7'.digit(''));
