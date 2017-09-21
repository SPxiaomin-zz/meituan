function findNthMax(n) {
  var a = [1, 3, 23, 234, 3236, 10330];
  var b = [2, 4, 6, 8, 10];
  var len = a.length + b.length;

  // 当输入不符合整数规范的时候，返回 -1
  var numRegPattern = /\d+/;
  if (!numRegPattern.test(n)) return -1;

  // 输入值为字符串，转为数值
  n = Number(n);

  // 当 n 输入不再 [1, len] 范围的时候，返回 -1
  if (n < 1 || n > len) return -1;

  // 对数组进行降续排列
  var concatArr = a.concat(b);
  concatArr.sort(function(a, b) {
    return b - a;
  });

  return concatArr[n - 1];
}
