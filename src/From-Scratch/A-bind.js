function aBind(fn, context) {
  if (Object.prototype.toString.call(fn) !== "[object Function]") {
    throw new Error("first argument should be a function");
  }

  return function(...args) {
    fn.call(context, ...args);
  };
}

// 使用实例
const f1 = function() {
  console.log(this.name);
};
const f2 = aBind(f1, { name: "xx" });
f2();



// 污染原型

Function.prototype.abind = function(context) {
  const fn = this;
  return function(...args) {
    fn.call(context, ...args);
  };
};

// 使用实例
const f3 = function() {
  console.log(this.name);
};
const f4 = f3.bind({ name: "xx" });
f4();
