// 数组去重
function deRepeat(arr){
   return arr.reduce(function(a, b){
    if(a.indexOf(b) < 0) {
        a.push(b)
    }
    return a 
    }, [])
}