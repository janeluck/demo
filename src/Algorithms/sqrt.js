/* 
 * 二分法求一个数的平方根
 * param {Number}   
 * return {Number}   
*/
function sqrtBisection(n) {
    if (n === 0 || n === 1) return n;
    var low = 0,
        high = n,
        pivot = (low + high) / 2,
        lastPivot = pivot;
    
    do {
        console.log(low, high, pivot, lastPivot)
        if (Math.pow(pivot, 2) > n) {
            high = pivot;
        } else if (Math.pow(pivot, 2) < n) {
            low = pivot;
        } else {
            return pivot;
        }
        lastPivot = pivot;
        pivot = (low + high) / 2;
    }
    // 使用Number.EPSILON表示能够接受的最小误差范围
    while (Math.abs(pivot - lastPivot) >= Number.EPSILON)
    return pivot;
}

