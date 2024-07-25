// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
/**
 * Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const nums = [0, 1, 2, 2, 3, 0, 4, 2];

const val = 2;

// cach 1
// var removeElement = function (nums, val) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (val !== nums[i]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// };
// console.log(removeElement(nums, val));

var removeElement = function (nums, val) {
  let tail = nums.length - 1;
  let k = 0;
  for (let i = 0; i <= tail; i++) {
    if (nums[i] === val) {
      nums[i] = nums[tail];
      tail--;
      i--;
    } else {
      k++;
    }
  }
  return k;
};

console.log(removeElement(nums, val));
