// We can solve it using a IIFE expression
function f() {
  var arr = ["red", "green", "blue"];
  var result = [];
  for (var i = 0; i < arr.length - 1; i++) {
    var func = function () {
      return arr[i];
    };
    result.push(func);
  }
  return result;
}
