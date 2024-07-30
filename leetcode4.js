// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = "";
  let i = 0;
  let j = 0;
  while (true) {
    if (strs[i].startsWith(prefix)) {
      if (i + 1 === strs.length) {
        prefix += strs[i][j];
        j++;
        i = 0;
      } else {
        i++;
      }
    } else {
      return prefix.slice(0, j - 1);
    }
  }
};
const a = ["a", "a"];
console.log(longestCommonPrefix(a));
// duyệt thằng đầu chữ f sau đó xem thằng 2 3 có f không, nêu có duyệt tiêp đến l và tiếp tục đến khi nào không có thì dừng và trả về các kí tự chung
