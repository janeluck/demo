// 判断回文字符串
// https://leetcode.com/problems/valid-palindrome/



// 常规解法O(1/2n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = String(s)
    .replace(/[^0-9a-z]/gi, "")
    .toLowerCase();

  for (let i = 0; i < Math.ceil(str.length); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
};


// 也可以使用js内置的reverse
var isPalindrome0 = function(s) {
    const str = String(s)
      .replace(/[^0-9a-z]/gi, "")
      .toLowerCase();
  
    return  str.split('').reverse().join('') === str
};
