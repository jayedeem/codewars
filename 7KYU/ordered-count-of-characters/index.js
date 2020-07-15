/**
 Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2],
 */

const orderedCount = (string) => {
  return [...string].reduce((a, c) => [
    a[c]++ ? 0 : (a[c] = 1)
    return a;
  ], {});
};

console.log(orderedCount('codewars'));
