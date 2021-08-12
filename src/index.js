exports.min = function min(array) {
  if (array) {
    if (array.length > 0) {
      return array.sort((a, b) => b - a).pop();
    } else return 0;
  } else return 0;
}

exports.max = function max(array) {
  if (array) {
    if (array.length > 0) {
      return array.sort((a, b) => a - b).pop();
    } else return 0;
  } else return 0;
}

exports.avg = function avg(array) {
  if (array) {
    if (array.length > 0) {
      return array.reduce((a, b) => a + b) / array.length;
    } else return 0;
  } else return 0;
}
