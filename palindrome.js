function palindrome(word) {
  //!You need to remove the blank spaces
  word = word
    .split('')
    .filter(item => item !== ' ')
    .join('');

  return (
    word.substring(0, word.length / 2 + 1) ===
    word
      .substring(word.length / 2, word.length)
      .split('')
      .reverse()
      .join('')
  );
}

// const isPalindrome = palindrome('anita lava la tina');
// console.log('isPalindrome %s', isPalindrome);

module.exports = palindrome;
