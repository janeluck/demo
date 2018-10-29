// 钢管切割最大利益解

// Price[i] : i米长钢管的价格
const Price = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

/* 
    给定长度的钢管得到价值和最大的切割方案
    @paramas {n} Number 

*/
const getMaxValue = function(n) {
  const max = [0];

  for (let i = 1; i <= n; i++) {
    const result = []
    for(let j = i - 1; j >=0; j--){
        result.push(max[j] + Price[i-j])
    }    
    max[i] = Math.max(...result)
  }

  return max[n];
};


for(let k = 1; k <= 10; k++){

    console.log(getMaxValue(k))
}