/* 
Given an array of integers.

Return an array, where the first element is the count of positives 
numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
you should return [10, -65].

*/

// function countPositivesSumNegatives(input) {
//   if (input) {
//     return input.reduce(
//       ([count = 0, sum = 0], num) =>
//         num > 0 ? [count + 1, sum] : [count, sum + num],
//       []
//     );
//   } else {
//     return [];
//   }
// }
function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
    return [];
  } else {
    let count = input.filter((num) => num > 0).length;
    let sum = input.filter((num) => num < 0).reduce((a, b) => a + b);
    return [count, sum];
  }
}
console.log(countPositivesSumNegatives());
