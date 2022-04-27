function palindrome(word) {
  //!You need to remove the blank spaces
  word = word
    .toLowerCase()
    .split('')
    .filter(item => item !== ' ')
    .join('');

  let length = word.length % 2 == 0 ? word.length / 2 : word.length / 2 + 1;
  let reverseLength = word.length % 2 == 0 ? word.length / 2 : Math.trunc(word.length / 2);

  return (
    word.substring(0, length) ===
    word.substring(reverseLength, word.length).split('').reverse().join('')
  );
}

// const isPalindrome = palindrome('anita lava la tina');
// console.log('isPalindrome %s', isPalindrome);

module.exports = palindrome;
