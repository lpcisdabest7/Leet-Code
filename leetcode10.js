// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const nums = [2, 3, 5, 6];
const target = 1;
var searchInsert = function (nums, target) {
    console.log(nums[0]);
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === target) return i;

    if (nums[i] < target && target < nums[i + 1]) {
      target = nums[i + 1];
      nums[i + 1] = nums[i + 2];
      return i + 1;
    }
    if (nums[i] < target && i === nums.length - 1) {
      target = nums[i + 1];
      return i + 1;
    }
    if (nums[0] > target) {
      nums.shift(target);
      return 0;
    }
  }
};
console.log(searchInsert(nums, target));
