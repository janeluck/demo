// 节流 第一次触发，单位时间内节流不再触发，过了单位时间再触发
function throttle(fn, time) {
  let last = 0;

  return function(...args) {
    const context = this,
      now = new Date();
    if (now - last > time) {
      last = now;
      fn.call(context, ...args);
    }
  };
}

// 防抖 最后一次触发
function debounce(fn, time) {
  let timeout = null;
  return function(...args) {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn.bind(context, ...args), time);
  };
}
