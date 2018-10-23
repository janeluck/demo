// 基本状态转换
// 添加链式调用
// 添加catch， 无法做到和onRejected排斥
// ? 传递then值
// all, race
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


  do_resolve(data) {
    if (this.state !== "pending") return;
    this.state = "resolved";
    this.value = data;
    this.resolvedFnArr.map(runTaskAsync);
  }
  do_reject(data) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.value = data;
    this.rejectedFnArr.map(runTaskAsync);
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

function runTaskAsync(task) {
  setTimeout(task);
}

const p = new APromise(function(resolve, reject) {
  console.log("p start");
  reject("p0");
});

p.then(
  function(val) {
    console.log(`p.then:${val}`);
  },
  function(e) {
    console.log("p in rejected");
  }
).catch(function(e) {
  console.log("catch:");
  console.log(e);
});
