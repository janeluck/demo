// 队列
// 先进先出
// todo 优先队列

const Queue = (function() {
  const items = new WeakMap();
  class Queue {
    constructor() {
      this[items] = [];
    }

    // 进队列
    enqueue(item) {
      return this.push(item);
    }

    // 出队列
    dequeue() {
      // todo 溢出控制
      return this.shift();
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

  return Queue;
})();
