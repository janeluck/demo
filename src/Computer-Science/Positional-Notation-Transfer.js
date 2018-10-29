// 进制转换
// 基本思想实现，目前不包括有小数位和负数的

// 十进制转二进制，八进制，十六进制
// 被除求余一直到0，被除的次数是`位`的位置，每次的余数是`位`上的数

function baseConverter(decNumber, base) {
  base = Number(base) || 2;
  const digits = "0123456789ABCDEF";
  let result = [];

  while (decNumber > 0) {
    result.push(decNumber % base);
    decNumber = Math.floor(decNumber / base);
  }

  result = result.map(function(item) {
    return digits[item];
  });

  return result.reverse().join("");
}

// 二进制，八进制，十六进制转十进制
// 相乘累加，是十进制转换过来的逆过程

function transferToTen(str, origin) {
  origin = Number(origin) || 2;
  let result = str.split("");
  if (origin === 16) {
    result = result.map(function(item) {
      switch (item) {
        case "A":
          return 10;
        case "B":
          return 11;
        case "C":
          return 12;
        case "D":
          return 13;
        case "E":
          return 14;
        case "F":
          return 15;
        default:
          return item;
      }
    });
  }

  return result
    .reverse()
    .reduce(function(acculator, currentValue, currentIndex) {
      return acculator + currentValue * Math.pow(origin, currentIndex);
    }, 0);
}

// 二进制转八进制，十六进制
// 因为2的三次方是8，所以每三位变一位。同理十六进制

const twoToEight = {
  "000": "0",
  "001": "1",
  "010": "2",
  "011": "3",
  "100": "4",
  "101": "5",
  "110": "6",
  "111": "7"
};

const twoToSixteen = {
  "0000": "0",
  "0001": "1",
  "0010": "2",
  "0011": "3",
  "0100": "4",
  "0101": "5",
  "0110": "6",
  "0111": "7",
  "1000": "8",
  "1001": "9",
  "1010": "A",
  "1011": "B",
  "1100": "C",
  "1101": "D",
  "1110": "E",
  "1111": "F"
};
const eightToTwo = {
  "0": "000",
  "1": "001",
  "2": "010",
  "3": "011",
  "4": "100",
  "5": "101",
  "6": "110",
  "7": "111"
};

const sixteenToTwo = {
  "0": "0000",
  "1": "0001",
  "2": "0010",
  "3": "0011",
  "4": "0100",
  "5": "0101",
  "6": "0110",
  "7": "0111",
  "8": "1000",
  "9": "1001",
  A: "1010",
  B: "1011",
  C: "1100",
  D: "1101",
  E: "1110",
  F: "1111"
};

function transferFromTwo(str, base) {
  base = Number(base) || 8;
  let i = 3;
  if (base === 16) {
    i = 4;
  }

  let finalStr =
    "0".repeat(str.length % i === 0 ? 0 : i - (str.length % i)) + "" + str;

  /*  const regExp = new RegExp('(\\d{' + i + '})+$', 'g');
  return (finalStr = finalStr.replace(regExp, function(replaced) {
    return i === 3 ? twoToEight[replaced] : twoToSixteen[replaced];
  })); */

  return finalStr
    .split("")
    .map(function(item, index) {
      return index % i === 0
        ? (i === 3 ? twoToEight : twoToSixteen)[
            finalStr.slice(index, index + i)
          ]
        : "";
    })
    .join("");
}

// 二进制转八进制: 三位转一位
// 二进制转十六进制: 四位转一位

function transferToTwo(str, origin) {
  origin = Number(origin) || 8;
  let i = 3;
  if (origin === 16) {
    i = 4;
  }

  return str
    .split("")
    .map(function(item) {
      return (i === 3 ? eightToTwo : sixteenToTwo)[item];
    })
    .join("")
    .replace(/^0+/, "");
}

// 八进制转十六进制

// 先转二进制再转十六进制

console.log(baseConverter(1000, 16));
console.log(transferToTen("1010", 2));
console.log(transferToTen("3E7", 16));
console.log(transferFromTwo("111111010", 16));
console.log(transferToTwo("1FA", 16));
