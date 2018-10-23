// 基本状态转换
// 添加链式调用

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

    if(data instanceof APromise){
      return data
    }
    return new APromise(function(doResolve, doReject) {
      doResolve(data);
    });
  }

  static reject(data) {
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
    return APromise.resolve(this)
  }
}

function runTaskAsync(task) {
  setTimeout(task);
}





const p = new APromise(function(resolve, reject) {
  console.log("p start");
  resolve("p0");
});

p.then(function(val) {
  console.log(`p.then:${val}`);
}).then(function(val){
  console.log(`p.then.then:${val}`);
});


const p0 = APromise.resolve('p0.resolved')

setTimeout(function(){
  console.log(p0)
  console.log('p0 is a resolved APromise')
}, 500)
