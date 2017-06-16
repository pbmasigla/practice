// https://leetcode.com/problems/add-two-numbers/#/description
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(data) {
	this.val = data;
	this.next = null;
}


const addTwoNumbers = (l1, l2) => {
  const firstNumber = getNumber(l1);
  const secondNumber = getNumber(l2);
  const total = `${firstNumber + secondNumber}`;
  const totalArray = total.split("").reverse();  
 
  let firstNode;
  let currNode;
  totalArray.forEach((num, index) => {
    const newNode = new ListNode(parseInt(num));
    if (currNode) {
      currNode.next = newNode;
    }
    else {
      firstNode = newNode;
    }
    currNode = newNode;
  });
  
  return firstNode.next.next.val;
    
};

const getNumber = node => {
  let currNode = node;
  let newNumber = ""
  
  while (currNode && currNode.val) {
    newNumber = `${currNode.val}${newNumber}`;
    currNode = currNode.next;
  }
  
  return parseInt(newNumber);
};


let node1 = new ListNode(2);
node1.next = new ListNode(4);
node1.next.next = new ListNode(3);

let node2 = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);

console.log(addTwoNumbers(node1, node2));
