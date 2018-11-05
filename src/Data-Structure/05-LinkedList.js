// 反转链表

const LinkedList = require("./04-LinkedList")
const linkedList01 = new LinkedList();
[0, 1, 2, 3, 4, 5].forEach(element => {
  linkedList01.append(element);
});

console.log(linkedList01.toString());

// 反转

// typescript的好处
// todo 输入检验是否为LinkedList
const reverseLinkedList = function(linkedList) {
  // todo 判断

  let prev = null, node = linkedList.head

  while(node){
    let next = node.next
    node.next = prev
    prev = node
    node = next
  }

  linkedList.head = prev

  return linkedList;
};

console.log(reverseLinkedList(linkedList01).toString())