const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  members = members.join(',').replace(/\s/g).split(',');
  let nameOfDreamTeam = [];
  for(let i = 0; i < members.length; i++){
    if(members[i][0].toUpperCase().match(/^[A-Z]*$/)){
      nameOfDreamTeam.push(members[i][0]);
    }
  }
  return nameOfDreamTeam.sort().join('');
}

module.exports = {
  createDreamTeam
};
