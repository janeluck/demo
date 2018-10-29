// 最短编辑距离
// 给定字符串str1，str2。 只允许单个字符的替换，插入，删除，求最少的操作步骤

// 分治法

function getDistance(str1, str2) {
  const i = str1.length,
    j = str2.length;

  if (i <= 1 || j <= 1) {
    return Math.max(i, j);
  }

  if (str1[i - 1] === str2[j - 1]) {
    return getDistance(str1.slice(0, i - 2), str2.slice(0, j - 2));
  } else {
    // 删除a[i]
    const stepDelete =
      getDistance(str1.slice(0, i - 2), str2.slice(0, j - 1)) + 1;

    // 插入b[j]
    const stepAdd = getDistance(str1.slice(0, i - 1), str2.slice(0, j - 2)) + 1;

    // 用b[j]替换a[i]
    const stepReplace =
      getDistance(str1.slice(0, i - 2), str2.slice(0, j - 2)) + 1;
    return Math.min(stepDelete, stepAdd, stepReplace);
  }
}

console.log(getDistance("adbedkb", "adxkb"));
