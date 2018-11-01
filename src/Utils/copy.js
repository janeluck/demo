function shallowCopy0(source) {
  const result = {};
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      result[i] = source[i];
    }
  }
  return result;
}

function shallowCopy1(source) {
  return { ...source };
}

function shallowCopy2(source) {
  const result = {};
  Object.keys(source).forEach(name => {
    result[name] = source[name];
  });
  return result;
}

function isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}

var a = {
  a1: 1,
  a2: {
    b1: 1,
    b2: {
      c1: 1
    }
  }
};

function deepCopy(source) {
  if (!isObject(source)) return source;

  const result = {};
  const loopList = [
    {
      parent: result,
      key: undefined,
      data: source
    }
  ];

  while (loopList.length) {
    const node = loopList.pop(),
      key = node.key,
      parent = node.parent,
      data = node.data;

    let res = parent;

    if (typeof key !== "undefined") {
        res = parent[key] = {} 
    }

    for (let name in data) {
        if(!isObject(data[name])){
            res[name] = data[name]
        }else{
            loopList.push({
                parent: res,
                key: name,
                data: data[name]
            })
        }
    }
  }
}
