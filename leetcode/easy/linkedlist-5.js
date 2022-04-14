/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 const reverse = (head) => {
  let prev = null;
  let curr = head;
  let temp;
  
  while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
  }
  
  return prev;
}

var isPalindrome = function(head) {
  let answer = true;
  
  let fast = head;
  let slow = head;
  let startPoint = head;
  let length = 0;
  
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      length++;
  }
  console.log(slow, length);

  let mid = reverse(slow);
  
  while (length) {
      length--;
      if (startPoint.val !== mid.val) {
          return false;
      }
      startPoint = startPoint.next;
      mid = mid.next;
  }
  

  return answer;
};