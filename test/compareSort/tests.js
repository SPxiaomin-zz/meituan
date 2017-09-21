var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var topK = require('./topK');
var vallinaSort = require('./vallinaSort');

var a = [1, 3, 23, 234, 3236, 10330];
var b = [2, 4, 6, 8, 10];
var concatArr = a.concat(b);

var test1 = function(arr) {
  return topK(arr, 1, function(a, b) { return a < b; });
};

var test2 = function(arr) {
  return vallinaSort(arr);
};

// add tests
suite.add('topK', function() {
  test1(concatArr);
})
.add('vallinaSort', function() {
  test2(concatArr);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

// logs:
// spxiaomin@spxiaomin:~/Desktop/meituan/test/compareSort$ node tests.js
// topK x 34,519,758 ops/sec ±3.01% (81 runs sampled)
// vallinaSort x 2,513,008 ops/sec ±3.16% (88 runs sampled)
// Fastest is topK
