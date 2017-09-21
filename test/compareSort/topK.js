function exch(arr, i, j){
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function Top(arr, comp){
  if (arr.length == 0) return;
  var i = arr.length / 2 | 0 ;
  for (;i >= 0; i--) {
    if (comp(arr[i], arr[i * 2])) { exch(arr, i, i*2); }
    if (comp(arr[i], arr[i * 2 + 1])) { exch(arr, i, i*2 + 1); }
  }

  return arr[0];
}

function topK(arr, n, comp){
  if (!arr || arr.length == 0 || n <= 0 || n > arr.length) {
    return -1;
  }

  var ret = new Array();
  for (var i = 0;i < n; i++) {
    var max = Top(arr,comp);
    ret.push(max);
    arr.splice(0,1);
  }
  return ret;
}

module.exports = topK;
