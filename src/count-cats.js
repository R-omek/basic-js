const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let n = matrix.length;
  let numberOfCats = [];
  for (let i = 0; i < n; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === '^^'){
       numberOfCats.push(matrix[i][j]);
      }
    }
  }
  return numberOfCats.length;
}

module.exports = {
  countCats
};
