/**
 Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

Top answer:
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')


https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
 */

function removeDuplicateWords(s) {
  return s
    .split(' ')
    .filter((a, b, c) => c.indexOf(a) === b)
    .join(' ');
}

// const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ');

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
);
