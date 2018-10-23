// 基本状态转换

class APromise {
  constructor(fn) {
    this.state = "pending";
    this.resolvedFnArr = [];
    this.rejectedFnArr = [];
    // todo undefined
    this.value = undefined;
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    fn(this.resolve, this.reject);
  }
  resolve(data) {
    if (this.state !== "pending") return;
    this.state = "resolved";
    this.value = data;
    this.resolvedFnArr.map(runTaskAsync);
  }
  reject(data) {
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
      this.resolvedFnArr.push(onResolved)
      this.rejectedFnArr.push(onRejected)
    }
  }
}

function runTaskAsync(task) {
  setTimeout(task);
}

const p = new APromise(function(resolve, reject) {
    console.log('p start')
    resolve('p0')
});

p.then(function(val){
    console.log(`p.then:${val}`)
})