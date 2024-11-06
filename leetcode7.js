/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [0,0,1,1,1,2,2,3,3,4];
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

removeDuplicates(nums);
