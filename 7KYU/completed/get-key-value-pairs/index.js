/**
 Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?
top answer:

 function keysAndValues(data){
    var arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.keys(data).map(function(x){return data[x]}))
    return arr
}
*/

function keysAndValues(data) {
  const k = Object.keys(data).map((key) => [key]);
  const v = Object.values(data).map((value) => [value]);
  const kArr = [].concat(...k);
  const vArr = [].concat(...v);
  return [kArr, vArr];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
