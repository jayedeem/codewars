/**
 * Write a function which converts the input string to uppercase.
 */

const makeUpperCase = (str) => [...str].map((el) => el.toUpperCase()).join('');

const makeUpperCase = str = str.toUpperCase()