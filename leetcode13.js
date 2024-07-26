// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const a = "1010";
const b = "1011";
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i] - "0";
      i--;
    }

    if (j >= 0) {
      sum += b[j] - "0";
      j--;
    }

    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }

  return result;
};

console.log(addBinary(a, b));
