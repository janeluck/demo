/* 
 * 替换原字符串里面的变量
 * @params {String} 输入模板字符串
 * @return {String} 输出替换后的结果
*/

const name = "jane",
  year = 2018,
  a = 2,
  b = 3;

function replace(str) {
  return str.replace(/\$\{([^}].*?)\}/g, function(matched, key) {
    
    return eval(key);
  });
}

console.log(replace("name: ${name}, year: ${year}, ${a + b}"));
