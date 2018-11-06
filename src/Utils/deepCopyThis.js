function deepCopyThis() {
  const that = this;

 

  const root = {},
   //todo  循环引用
    uids = [];

  const loopList = [
    {
      parent: root,
      key: undefined,
      data: that
    }
  ];

  while (loopList.length) {

    const { key, data, parent } = loopList.pop();
    let res = parent
    if (key !== undefined) {
      res = parent[key] = {};
    }

    for (let name in data) {
      if(data.hasOwnProperty(name)){
        if (!isObject(data[name])) {
            res[name] = data[name];
          } else {
            loopList.push({
              parent: res,
              key: name,
              data: data[name]
            });
          }
      }  
      
    }
  }

  return root
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const o = {name: 'j', age: {pro: 3}}

console.log(deepCopyThis.call(o))
