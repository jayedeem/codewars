/**
 Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

top answer: 

function printArray(array){
  return array.join();
}
 */

// const printArray = (a) => a.join("'").replace(/'/g, ',');

function printArray(array) {
  return array.join();
}

console.log(printArray(['h', 'o', 'l', 'a']));
