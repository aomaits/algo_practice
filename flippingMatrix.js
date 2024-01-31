var matrix1 = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]
var matrix2 = [[112, 42, 83, 119], [56, 31, 56, 49], [15, 78, 101, 43], [62, 98, 116, 108]]

function flippingMatrix(matrix) {

  const matrixSize = matrix.length/2; //in this example = 2

  let maxSum = 0;

  for (let i = 0; i < matrixSize; i++) { //in this example, loops thru twice
    for (let index = 0; index < matrixSize; index++) {
      let maxValue = Math.max(
        matrix[i][index],
        matrix[2 * matrixSize - 1 - i][index],
        matrix[i][2 * matrixSize - 1 - index],
        matrix[2 * matrixSize - 1 - i][2 * matrixSize - 1 - index]
      );
      // console.log("So of these four numbers the maxSum is: " + maxValue)
      maxSum += maxValue; 
      // console.log(maxSum);
    }    
  }
  // console.log(maxSum);
}

flippingMatrix(matrix1); //expect output of "414"