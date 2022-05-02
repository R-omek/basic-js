const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let cal = 0;
  let newStr;
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < str.length; i++){
      if(str[i] === str[j]){
        cal++;
      }
      newStr += str[i] + cal;
      cal = 0;
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
