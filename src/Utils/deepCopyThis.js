



function deepCopyThis() {
  const that = this;

 
  
  const root = Object.prototype.toString.call(that) === '[object Object]' ? {} : [],
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
      res = parent[key] = Object.prototype.toString.call(data) === '[object Object]' ? {} : [];
    }

    for (let name in data) {
      if(data.hasOwnProperty(name)){
        if (typeof data[name] !== 'object') {
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



const o = {name: 'j', age: {pro: 3}, bei: [2,3,6,4,{na: 'xxx'}]}

console.log(deepCopyThis.call(o))


