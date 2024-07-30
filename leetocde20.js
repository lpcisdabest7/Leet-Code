/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;

  nums.forEach((e) => {
    result ^= e;
  });
  return result;
};
let a = [4, 1, 2, 1, 2];
console.log(singleNumber(a));

// https://leetcode.com/problems/single-number/description/
