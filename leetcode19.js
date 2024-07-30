// https://leetcode.com/problems/same-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (q === null && p === null) {
        return true;
    }
    if (q === null || p === null) {
        return false;
    }
    if (q.val !== p.val) {
        return false
    }
    return isSameTree(q.left, p.left) && isSameTree(q.right, p.right)

};
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let p3 = new TreeNode(3);
let p2 = new TreeNode(2, null, p3);
let p = new TreeNode(1, null, p2);
//////////////////////////////////////
let q3 = new TreeNode(3);
let q2 = new TreeNode(2, null, q3);
let q = new TreeNode(1, null, q2);
console.log(isSameTree(p, q));
