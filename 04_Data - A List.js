function arrayToList(array) {
  var list = null;
  for (var i = (array.length-1); i >= 0; i--) {
    if (i < array.length) {
      list = {value: array[i], rest: list }
    } else {
      list = { value: array[i], rest: null }
    };
  };
  return list;
};

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

function prepend(element, list) {
  return { value: element , rest: list };
};

function nth(list, position) {
  var i = 0;
  for (var node = list; node; node = node.rest) {
    if (i == position) {
      return node.value;
    }
    i++;
  };
};

console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20