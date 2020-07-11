/**
 * 
 * 
 Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
 */

function isPalindrome(string) {
  const lowerCased = string.toLowerCase();

  return lowerCased === [...lowerCased].reverse().join('');
}

console.log(isPalindrome('Yay'));
