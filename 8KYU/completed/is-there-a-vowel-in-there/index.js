/**
 Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.


 */

function isVow(a) {
  return a
    .map((num) => String.fromCharCode(num).match(/[aeiou]/g) || num)
    .reduce((el, val) => el.concat(val), []);
}

console.log(
  isVow([
    118,
    117,
    120,
    121,
    117,
    98,
    122,
    97,
    120,
    106,
    104,
    116,
    113,
    114,
    113,
    120,
    106,
  ])
);
