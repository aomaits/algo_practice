function twoArrays(k, A, B) {
  /*
  subtract the values of the second array from k to create a difference array (usually negative values)
  subtract the first array from the difference array to get the balance array
  add together all balance array values, if >= 0, return YES
  */

  let diffArray = [];
  let balanceArray =[];
  let balanceSum = 0;

  // console.log(B);

  B.forEach(element => {
    // console.log(element);
    // console.log(k)

    diffArray.push(element - k);
    // console.log(diffArray);
  });

  for (let i = 0; i < A.length; i++) {
    // console.log(balanceArray);
    // console.log(diffArray[i]);
    // console.log("minus");
    // console.log(B[i]);
    balanceArray.push(diffArray[i] - A[i]);  
  }
  
  for (let i=0; i <balanceArray.length; i++) {
    // balanceSum = 
    // TODO add together all the values in the balanceArray
  }
  console.log(balanceArray)  

  // console.log(diffArray);

  // let initialArray = A;
  // let arraysArePermutable = true;
  // let arrayNeedsShuffled = false;
  // let j = 1;
  // let correctCount = 0; //will help me check the for loop to see if both arrays are in the correct order
  // const startingArray1 = A;
  // const startingArray2 = B;
  // const arrayLength = A.length;

  // const arrayShuffler = (unshuffledArray) => {
    //store previous versions of the array in an array of subarrays, then check if all versions have been created

        //arrayshuffler function
        // correctCount = 0;

        // if (j < unshuffledArray.length) {
        //   let swappedElement = unshuffledArray.shift();
          // console.log(swappedElement);
          // console.log(A);
          // unshuffledArray.splice(j, 0, swappedElement)
          // console.log(A);
          // if (unshuffledArray === startingArray1 || unshuffledArray === startingArray2) {
            // move to the next indexes because I've cycled through this whole array once
        //   }
        // }
        // arrayNeedsShuffled = false;
        // j++;
        // console.log(j)
        // console.log("array was shuffled: ", unshuffledArray);
  // }

  // const compareArrays = (givenInteger, array1, array2) => {
  //   for (let i = 0; i < array1.length; i++) {
  //     if (array1[i] + array2[i] >= givenInteger) {
  //       console.log("Works at index of ", i);
  //       correctCount++;
  //       if (correctCount === arrayLength) {
  //         console.log("The arrays are now in order: ")
  //         console.log(array1);
  //         console.log(array2);
  //         console.log(k);
          // return "YES"
      //   }
      // } if (array1[i] + array2[i] < givenInteger) {
      //   console.log("Does not work at index of ", i, ", arrays need to be shuffled")
      //   arrayNeedsShuffled = true;
        // console.log(arrayNeedsShuffled);
  //       return;
  //     }
  //   }
  // }
  // compareArrays(k, A, B);

  // if (arrayNeedsShuffled) {
  //   arrayShuffler(A);
  // }

  /*
  Compare the two arrays, end the program if all indices are >= k when added
  if not, shuffle first array - 
    i & i+1   as long as i+1 < 1stArray.length
  run the comparison function again, if not, run the shuffle function again
  If arrays don't make mix && i === 1stArray.length, shuffle the second array, then run the comparison again
  */
};

twoArrays(1, [0, 1], [0, 2]);