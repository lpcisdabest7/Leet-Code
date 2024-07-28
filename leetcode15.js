// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
/**
 * @param {number} n
 * @return {number}
 */
const n = 3;
// var climbStairs = function (n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
var climbStairs = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let a = 1;
  let b = 1;
  let c;

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
};
console.log(climbStairs(n));
