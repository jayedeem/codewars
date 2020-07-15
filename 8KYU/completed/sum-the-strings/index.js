/*
Create a function that takes 2 positive integers in form of a string 
as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"
*/

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

console.log(sumStr("1", "2"));
