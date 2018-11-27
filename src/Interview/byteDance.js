function Deffered() {
  this.handlers = [];
}

Deffered.prototype = {
  then: function(fn) {
    this.handlers.push(fn);
  },
  resolve: function(str) {
    let nextV = str;
    while (this.handlers.length) {
      nextV = this.handlers.shift().call(this, nextV);
    }
  }
};

var d0 = new Deffered();
d0.then(function(data) {
  console.log(data);
  return "a";
});
d0.then(function(data) {
  console.log(data);
  return "b";
});
d0.then(function(data) {
  console.log(data);
});

d0.resolve("resolved");
