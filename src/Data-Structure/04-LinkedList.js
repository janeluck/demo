// 链表
// 有序的集合，head作为开始，每一个元素上存储着数据和指向下一个元素的指针，最后一个元素指向null
// todo 溢出判断
const LinkedList = (function() {
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    }

    append(element) {
      const node = new Node(element);

      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }

    insert(position, element) {
      const node = new Node(element);

      if (Number(position) === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let i = 0,
          current = this.head,
          prev;
        while (i++ < position) {
          prev = current;
          current = current.next;
        }
        prev.next = node;
        node.next = current;
      }
    }

    remove(element) {
      if (!this.head) return;

      let current = this.head,
        prev;
        
      while(current){
          prev = current
          current = current.next         
          if(prev.element === element){
              prev.next = current
              break
          }
      } 
    }


    size() {
      let i = 0,
        current = this.head;
      while (current) {
        current = current.next;
        i++;
      }
      return i;
    }
  }

  return LinkedList;
})();
