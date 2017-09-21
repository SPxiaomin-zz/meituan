function vallinaSort(arr) {
  var tempArr = arr.concat();

  tempArr.sort(function(a, b) {
    return b - a;
  });

  return tempArr;
}

module.exports = vallinaSort;
