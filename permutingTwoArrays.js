function twoArrays(k, A, B) {
  // let initialArray = A;
  // let arraysArePermutable = true;
  let arrayNeedsShuffled = false;
  let j = 1;

  const compareArrays = (givenInteger, array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] + array2[i] >= givenInteger) {
        console.log("Works at index of ", i);
      } if (array1[i] + array2[i] < givenInteger) {
        console.log("Does not work at index of ", i, ", arrays need to be shuffled")
        arrayNeedsShuffled = true;
        return;
      }
    }
  }
  compareArrays(k, A, B);

  if (arrayNeedsShuffled) {
    //arrayshuffler function
    if (A[j] < A.length) {
      let swappedElement = A.shift();
      // console.log(swappedElement);
      // console.log(A);
      A.splice(j, 0, swappedElement)
      // console.log(A);
    }
    arrayNeedsShuffled = false;
    j++;
    console.log(j)
  }

  /*
  Compare the two arrays, end the program if all indices are >= k when added
  if not, shuffle first array - 
    i & i+1   as long as i+1 < 1stArray.length
  run the comparison function again, if not, run the shuffle function again
  If arrays don't make mix && i === 1stArray.length, shuffle the second array, then run the comparison again
  */
};

twoArrays(1, [0, 1], [0, 2]);