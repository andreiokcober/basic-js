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
function countCats(backyard) {
    let arr = backyard.length
        let mouse =  '^^'
        let result = 0
        
       for(i = 0; i <arr; i++){
               for(j = 0;j<backyard[i].length;j++){
                       
                       if(backyard[i][j] === mouse){
                               result++
                               
                       }                       
               }
       }
       return result
}

module.exports = {
  countCats
};
