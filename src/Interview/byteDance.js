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

function Deffered1() {
  this.handlers = [];
}

Deffered1.prototype = {
  then: function(fn) {
    this.handlers.push(fn);
  },
  resolve: function(str) {
    let nextV = str;
    while (this.handlers.length) {
      nextV = this.handlers.shift().call(this, nextV);
      if (nextV instanceof Deffered1) {
        while (this.handlers.length) {
          nextV.then(this.handlers.shift());
        }
      }
    }
  }
};

var d1 = new Deffered1();
d1.then(function(data) {
  console.log(data);
  const d2 = new Deffered1();
  setTimeout(function() {
    d2.resolve("d2 resolved");
  });
  return d2;
});
d1.then(function(data) {
  console.log(data);
  return "b";
});
d1.then(function(data) {
  console.log(data);

  const d3 = new Deffered1();
  setTimeout(function() {
    d3.resolve("d3 resolved");
  });
  return d3;
});

d1.then(function(data) {
  console.log(data);
});

d1.resolve("d1 resolved");
