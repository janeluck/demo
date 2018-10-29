// 栈
// 后进先出
const Stack = (function() {
  const items = new WeakMap();
  class Stack {
    constructor() {
      this[items] = [];
    }
    push(item) {
      return this.push(item);
    }
    pop() {
      // todo 溢出控制
      return this.pop();
    }
    peek() {
      return this[items][this.size() - 1];
    }
    size() {
      return this[items].length;
    }
    isEmpty() {
      return this.size() === 0;
    }
    clear() {
      this[items] = [];
    }
  }

  return Stack;
})();
