// 数组去重
export default function deRepeat(arr) {
  return arr.reduce(function(a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }
    return a;
  }, []);
}
