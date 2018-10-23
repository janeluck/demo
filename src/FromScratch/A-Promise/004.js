// 基本状态转换
// 添加链式调用
// 添加catch， 无法做到和onRejected排斥
// all, race

// ? 传递then值

class APromise {
  constructor(fn) {
    this.state = "pending";
    this.resolvedFnArr = [];
    this.rejectedFnArr = [];
    // todo undefined
    this.value = undefined;
    this.do_resolve = this.do_resolve.bind(this);
    this.do_reject = this.do_reject.bind(this);

    fn(this.do_resolve, this.do_reject);
  }

  static resolve(data) {
    if (data instanceof APromise) {
      // 依赖于传入的APromise的状态
      return data;
    }
    return new APromise(function(doResolve, doReject) {
      doResolve(data);
    });
  }

  static reject(data) {
    // 和resolve不同，reject直接改状态为'rejected'
    return new APromise(function(doResolve, doReject) {
      doReject(data);
    });
  }

  // todo 可扩展成iterable
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

  do_resolve(data) {
    if (this.state !== "pending") return;
    this.state = "resolved";
    this.value = data;
    this.resolvedFnArr.forEach(function(task) {
      runTaskAsync(task, data);
    });
  }
  do_reject(data) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.value = data;
    this.rejectedFnArr.forEach(function(task) {
      runTaskAsync(task, data);
    });
  }

  then(onResolved, onRejected) {
    typeof onResolved !== "function" && (onResolved = function() {});
    typeof onRejected !== "function" && (onRejected = function() {});

    switch (this.state) {
      case "resolved":
        onResolved(this.value);
        break;
      case "rejected":
        onRejected(this.value);
        break;
      default:
        this.resolvedFnArr.push(onResolved);
        this.rejectedFnArr.push(onRejected);
    }
    return APromise.resolve(this);
  }
  catch(onRejected) {
    this.then(null, onRejected);
  }
}

function runTaskAsync(task, data) {
  setTimeout(function() {
    task(data);
  });
}

const p0 = new APromise(function(resolve, reject) {
  setTimeout(function() {
    resolve("p0");
  }, 1000);
});
const p1 = new APromise(function(resolve, reject) {
  setTimeout(function() {
    resolve("p1");
  }, 400);
});
const p2 = new APromise(function(resolve, reject) {
  setTimeout(function() {
    resolve("p2");
  }, 600);
});
const p3 = new APromise(function(resolve, reject) {
  setTimeout(function() {
    resolve("p3");
  }, 800);
});

APromise.all([p0, p1, p2, p3]).then(function(result) {
  console.log("all:");
  console.log(result);
});

APromise.race([p0, p1, p2, p3]).then(function(result) {
  console.log("race:");
  console.log(result);
});