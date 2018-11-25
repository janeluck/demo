const arr = [2, 3, 4, 8, 6, 1, 5, 8, 5, 3, 7];

// 冒泡排序
// 每次冒泡最大的到最后，实现是两层for循环，比较交换相邻位置的元素
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

// 插入排序
// 分有序和无序，每次拿无序的放入到正确的有序位置，实现是两层for循环，拿无序的和最后的有序依次向前比较

function insertSort(arr) {
  const result = arr.slice();
  if (result.length <= 1) return result;

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      let flag = false;
      if (result[j] < result[j - 1]) {
        const rest = result[j];
        result[j] = result[j - 1];
        result[j - 1] = rest;
        flag = true;
      }

      if (!flag) {
        break;
      }
    }
  }

  return result;
}

// 选择排序
// 有序和无序，每次拿无序中的最小元素与有序的最后元素比较
function selectSort(arr) {
  const result = arr.slice();
  if (result.length <= 1) return result;

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[i]) {
        const rest = result[j];
        result[j] = result[i];
        result[i] = rest;
      }
    }
  }

  return result;
}

console.log(bubbleSort(arr));
console.log(insertSort(arr));
console.log(selectSort(arr));
