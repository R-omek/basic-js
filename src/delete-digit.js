const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < n.length; i++){
    arr.push(n[i]);
  }
  let sortedArr = arr.sort();
  arr2.push(sortedArr[0]);
  for (let j = 0; j < arr.length; j++){
    if (arr[j] === arr2[0]){
      arr = arr.splice(j, 1);
      break;
    }
  }
  arr = arr.join('');
  return Number(arr);
}

module.exports = {
  deleteDigit
};
