var matrix1 = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]

function flippingMatrix(matrix) {
  numberOfSubArrays = matrix.length;
  // console.log(numberOfSubArrays)

  // var subarray1 = matrix.slice(0, 1);
  // var subarray2 = matrix.slice(1, 1);
  // var subarray3 = matrix.slice(2, 1);
  // var subarray4 = matrix.slice(3, 1);

  var topLeftSum = matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
  var bottomLeftSum = matrix[2][0] + matrix[2][1] + matrix[3][0] + matrix[3][1];
  var topRightSum = matrix[0][2] + matrix[0][3] + matrix[1][2] + matrix[1][3];
  var bottomRightSum = matrix[2][2] + matrix[2][3] + matrix[3][2] + matrix[3][3];
  console.log(bottomRightSum);
  


  // Compare each subquadrant
  // 0th and 1st positions for 0th and 1st arrays = topleftsum
  // 0th and 1st positions for 3rd and 4th arrays = bottomleftsum
  // 2nd and 3rd positions for 0th and 1st arrays = toprightsum
  // 2nd and 3rd positions for 3rd and 4th arrays = bottomrightsum
  // if topleft isn't biggest, not complete

  // flip a column if the values at the bottom are higher than at the top, then check the quadrants
}

flippingMatrix(matrix1) //expect output of "414"