function isPalindrome(string) {
  // Start coding here
  const reverseString = string.split("").reverse().join("");
  return string === reverseString;
}

//Example case
console.log(isPalindrome("reviver"));
console.log(isPalindrome("บวบ"));
console.log(isPalindrome("deliver"));
