//leetcode.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var deleteDuplicates = function (head) {
  let output = head;
  while (output !== null && output.next !== null) {
    if (output.val == output.next.val) {
      output.next = output.next.next;
    } else {
      output = output.next;
    }
  }
  return head;
};
let node5 = new ListNode(3, null);
let node4 = new ListNode(2, node5);
let node3 = new ListNode(2, node4);
let node2 = new ListNode(1, node3);
let head = new ListNode(1, node2);
console.log(deleteDuplicates(head));
