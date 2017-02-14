/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  let arrLen = this.matrix.length;
  let sq = arrLen
  let newArr = [];
  console.log(this.matrix);

  for(let z = 0; z < arrLen; z++) {
    newArr.push([])
  }

  if(direction === Direction.CW) {
    this.matrix.map( (subArr, i) => {
      sq--
      subArr.map( (elem, x) => {
        newArr[x][i] = this.matrix[sq][x]
      })
    })
  } else {
    for(let i = arrLen-1; i > -1; i--) {
      sq--
      for(let x = arrLen-1; x > -1; x--) {
        newArr[x][i] = this.matrix[sq][x];
      }
    }
    newArr = newArr.reverse()
  }

  this.matrix = newArr;
  return this.matrix;

};
