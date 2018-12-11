/**
 * Valid Parentheses
 * @param {string} 
 * @return {boolean}
 */
export default function validParentheses (s) {
  const paren_map = {
      "{": "}",
      "[": "]",
      "(": ")"
    },
    result = [];

  for (let i = 0; i < s.length; i++) {
    if (paren_map[s[i]]) {
      result.push(s[i]);
    } else {
      if (paren_map[result.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return result.length === 0;
};
