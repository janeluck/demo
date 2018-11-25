const arr = [2, 3, 4, 8, 6, 1, 5, 8, 5, 3, 7];

// 冒泡排序
// O(n^2)
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
// O(n^2)
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
// O(n^2)
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

// 归并排序
// O(nlogn)
// 均分两组，二分分治后而合之
function mergeSort(arr) {
  if (arr.length <= 1) return arr.slice();

  const middle = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, middle));
  const rightArr = mergeSort(arr.slice(middle));

  return sort0(leftArr, rightArr);
}

function sort0(leftArr, rightArr) {
  const result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  if (leftArr.length) {
    result.push(...leftArr);
  }

  if (rightArr.length) {
    result.push(...rightArr);
  }

  return result;
}

// 快速排序
// O(nlogn)
// 挑选pivot，左中右分为三段，后而联之

function quickSort(arr) {
  if (arr.length <= 1) return arr.slice();

  const centerItem = arr.shift(),
    leftArr = [],
    rightArr = [];

  while (arr.length) {
    if (arr[0] < centerItem) {
      leftArr.push(arr.shift());
    } else {
      rightArr.push(arr.shift());
    }
  }

  return quickSort(leftArr).concat(centerItem, quickSort(rightArr));
}

console.log(bubbleSort(arr));
console.log(insertSort(arr));
console.log(selectSort(arr));
console.log(mergeSort(arr));
console.log(quickSort(arr));
