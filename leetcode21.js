/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let numbersEncountered = {};
  let result = [];

  nums.forEach((number) => {
    if (!numbersEncountered[number]) {
      numbersEncountered[number] = 1;
      result.push(number);
    } else {
      while (result.includes(number)) {
        result.splice(result.indexOf(number), 1);
      }
    }
  });

  return result[0];
};

let a = [1, 3, 2, 1, 2, 1];
console.log(singleNumber(a));
//https://leetcode.com/problems/single-number-ii/description/
