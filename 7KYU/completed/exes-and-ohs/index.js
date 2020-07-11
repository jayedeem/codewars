/**
 Check to see if a string has the same amount of 'x's and 'o's. 
 The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

/**
 Top Answer

 function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);

  EZ Answer
  const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x')
  .length === str.filter(x => x === 'o').length;
}
}
 */

const XO = (str) => {
  str = str.toLowerCase();
  return (
    [...str].filter((x) => x === 'x').length ===
    [...str].filter((o) => o === 'o').length
  );
};

// function XO(str) {
//   const newStr = str.toLowerCase();
//   let oS = 0;
//   let xS = 0;
//   for (let i = 0; i <= newStr.length; i++) {
//     if (newStr[i] === 'o') {
//       oS += 1;
//     }
//     if (newStr[i] === 'x') {
//       xS += 1;
//     }
//   }
//   return oS === xS;
// }

console.log(XO('xo'));
