/**
 Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
 */

// function between(a, b) {
//   if (a === b) return [a];
//   return [a, ...between(a + 1, b)];
// }

function between(start, end) {
  return Array.from({ length: end - start + 1 }).map((_, i) => i + start);
}

console.log(between(1, 4));
