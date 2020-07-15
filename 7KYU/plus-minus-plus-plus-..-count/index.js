/**
 * Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |


catchSignChange(arr) == 2;
 */
function catchSignChange(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 1) {
      let newArr = arr[i];
      newArr
        .toString()
        .split('')
        .forEach((el) => (el == '-' ? result++ : null));
    }
  }
  return result;
}

console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77]));
