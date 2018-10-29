// 遵循Promise/A+规范， 实现ES6.Promise的api
// 异步机制使用setTimeout模拟

const identity = val => val;
const isFunction = func => typeof func === "function";
const State = {
  pending: "pending",
  resolved: "resolved",
  rejected: "rejected"
};

export default class APromise {
  constructor(fn) {
    // 初始化状态
    this.promiseState = State.pending;
    this.promiseValue = undefined;

    // 处理器数组
    this.hanlders = [];

    this.resolve = value => {
      return this.setResult(value, State.resolved, "resolve");
    };

    this.reject = reason => {
      return this.setResult(reason, State.rejected);
    };

    this.setResult = (value, state, fromWhere) => {
      const set = () => {
        if (this.promiseState !== State.pending) {
          return null;
        }

        if (value instanceof APromise && fromWhere === "resolve") {
          // 是否resolve取决于传入的promise
          return value.then(this.resolve, this.reject);
        }
        this.promiseState = state;
        this.promiseValue = value;
        return this.executeHandlers();
      };

      setTimeout(set);
    };

    this.executeHandlers = () => {
      if (this.promiseState === State.pending) {
        return null;
      }
      this.hanlders.forEach(handler => {
        if (this.promiseState === State.resolved) {
          handler.onResolved(this.promiseValue);
        } else {
          handler.onRejected(this.promiseValue);
        }
      });
      // 每次执行完毕后清空
      this.hanlders = [];
    };

    this.attachHandler = handler => {
      this.hanlders = [...this.hanlders, handler];
      this.executeHandlers();
    };

    try {
      fn(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }

  then(onResolved, onRejected) {
    onResolved = isFunction(onResolved) ? onResolved : identity;

    return new APromise((resolve, reject) => {
      this.attachHandler({
        onResolved: value => {
          try {
            resolve(onResolved(value));
          } catch (e) {
            reject(e);
          }
        },
        onRejected: reason => {
          try {
            isFunction(onRejected)
              ? resolve(onRejected(reason))
              : reject(reason);
          } catch (e) {
            reject(e);
          }
        }
      });
    });
  }

  catch(onRejected) {
    onRejected = isFunction(onRejected) ? onRejected : identity;
    return this.then(identity, onRejected);
  }
  finally(fn) {
    // finally保持promise最后的状态结果，与then不同
    return new APromise((resolve, reject) => {
      this.attachHandler({
        onResolved: value => {
          fn();
          resolve(value);
        },
        onRejected: reason => {
          fn();
          reject(reason);
        }
      });
    });
  }

  static resolve(v) {
    return new APromise((resolve, reject) => {
      return resolve(v);
    });
  }
  static reject(v) {
    return new APromise((resolve, reject) => {
      return reject(v);
    });
  }
  static all(arr) {
    return new APromise(function(resolve, reject) {
      var result = [],
        i = arr.length;
      arr.forEach(function(p, index) {
        p.then(
          function(data) {
            result[index] = data;
            i--;
            if (i === 0) {
              resolve(result);
            }
          },
          function(error) {
            reject(error);
          }
        );
      });
    });
  }
  static race(arr) {
    return new APromise(function(resolve, reject) {
      for (let p of arr.map(APromise.resolve)) {
        p.then(
          function(data) {
            resolve(data);
          },
          function(error) {
            reject(error);
          }
        );
      }
    });
  }
}
