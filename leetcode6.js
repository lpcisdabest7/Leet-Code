// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
var mergeTwoLists = function (list1, list2) {
  const result = new ListNode();

  let output = result;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      output.next = list1;
      list1 = list1.next;
    } else {
      console.log(list2.next);
      output.next = list2;
      list2 = list2.next;
    }
    output = output.next;
  }
  output.next = list1 || list2;

  return result.next;
};

// const node4 = new ListNode(4, null);
// const node3 = new ListNode(3, node4);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);

// let list1 = node1;
// while (list1) {
//   console.log(list1.val);
//   list1 = list1.next;
// }
// // console.log(mergeTwoLists(list1, list2));

let num = 10;
let list1 = new ListNode(num--, null);
while (num > 0) {
  const item = new ListNode(num, list1);
  list1 = item;
  num -= 1;
}

let num2 = 20;
let list2 = new ListNode(num2--, null);
while (10 < num2) {
  const item = new ListNode(num2, list2);
  list2 = item;
  num2 -= 1;
}

let r = mergeTwoLists(list1, list2);

while (r) {
  console.log(r.val);
  r = r.next;
}
