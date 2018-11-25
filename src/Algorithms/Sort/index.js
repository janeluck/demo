const arr = [2, 3, 4, 8, 6, 1, 5, 8, 5, 3, 7];

// 冒泡

function bubbleSort(arr) {
  const result = arr.slice();

  if (result.length <= 1) return result;

  for (let i = 0; i < arr.length; i++) {
    // 标记是否有交换，无的话可以提前退出，优化效率
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // 大于  交换
        const rest = result[j];
        result[j] = result[j + 1];
        result[j + 1] = rest;
        flag = true;
      } 
    }

    if (!flag) {
      break;
    }
  }

  return result;
}

console.log(bubbleSort(arr));
