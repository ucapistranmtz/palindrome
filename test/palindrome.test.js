const palindromeExamples = require('./palindromeWords');
const isPalindrome = require('../palindrome');

test('single word test', () => {
  palindromeExamples.singleWords.forEach(item => {
    console.log(item);
    const result = isPalindrome(item);
    expect(result).toEqual(true);
  });
});

test('sentences test', () => {
  palindromeExamples.sentences.forEach(item => {
    console.log(item);
    const result = isPalindrome(item);
    expect(result).toEqual(true);
  });
});

test('error words and sentences test', () => {
  palindromeExamples.errorWords.forEach(item => {
    console.log(item);
    const result = isPalindrome(item);
    expect(result).toEqual(false);
  });
});
