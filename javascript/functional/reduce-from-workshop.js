function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1;
    return countMap
  }, {});
}

// Different way with ternary
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] ? countMap[word] + 1 : 1;
    return countMap
  }, {});
}
