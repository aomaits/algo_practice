function twoArrays(k, A, B) {
  let initialArray = A;
  // console.log(initialArray);

  const compareArrays = (array1, array2) => {
    let i = 0;
    while (i < A.length) {
      if (A[i] + B[i] >= k) {
        console.log("A[i] is: ", A[i], ", + B[i] (", B[i], ") is: ", (A[i] + B[i]), " which is greater than ", k)
        i++;
      } if (A[i] + B[i] < k) {
        console.log("A[i] is: ", A[i], ", + B[i] (", B[i], ") is: ", (A[i] + B[i]), " which is less than ", k);
        i++;
      }
    }
    console.log("time to shuffle")
    shuffleArray(A)
  }
  
  const shuffleArray = (firstArray) => {
    console.log("now shuffling...")
    let firstElement = firstArray.shift();
    firstArray.push(firstElement);
    console.log(firstArray)
    if (initialArray === firstArray) {
      console.log("whole array shuffled")
      //actually want to call a method to move to the second index position
    }
  }
  
  compareArrays(A, B);
  // while arraysArePermutedCorrectly === false
  // 

    // loop through the first array
    // see if A[i] + B[i] >= k
    // if yes, continue, if no, check to see if all of array has been compared i

  //TODO Have to be able to permute BOTH arrays!
  // How to ensure that both arrays are in the correct order? 
  
};

twoArrays(1, [0, 1], [0, 2]);