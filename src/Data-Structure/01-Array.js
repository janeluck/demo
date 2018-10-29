let a = [9, 8, 7, 6, 5, 4, 3, 2, 1];

a.push(0);
a.pop();

a.unshift(10);
a.shift();

a.splice(5, 2, 11, 12, 13);

a.slice();

a.every(function(value) {
  return a % 2 === 0;
});
a.some(function(value) {
  return a % 2 === 0;
});

a.reduce(function(acculator, currentValue, currentIndex, arr) {
  return acculator + currentValue;
}, 55);

a.map(function(value) {
  return value * 2;
});

a.filter(function(value) {
  return value % 2 === 0;
});

// find, findIndex

a.concat(3, [66, 67, 68]);
