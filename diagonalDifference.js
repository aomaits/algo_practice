const array1 = [ [-13, 2, -4], [4, 5, 6], [-7, 8, -12]]

function diagonalDifference(arr) {
    var leftToRightValue = 0;
    var rightToLeftValue = 0;
    
    // Sum up the left to right diagonal of the matrix
    const leftToRightDiagonal = (array) => {
        
        //loop through the subarrays while increasing the index postion at the same rate
        for (let i = 0; i < array.length; i++) {
            const currentSubarray = array[i];
            leftToRightValue = leftToRightValue + currentSubarray[i]
        };
        return leftToRightValue;
    };
    
    // Sum up the right to left diagonal of the matrix
    const rightToLeftDiagonal = (array) => {
        let j = 0;
        
        //loop backward through the subarrays while looping the index position forward at the same rate
        for (let i = array.length - 1; i >= 0; i--) {
            const currentSubarray = array[i];
            
            rightToLeftValue = rightToLeftValue + currentSubarray[j];
            j++;
        };
        return rightToLeftValue;
    };

    //call each function to get the corresponding diagonal sums
    leftToRightDiagonal(arr);
    rightToLeftDiagonal(arr);

    //subtract one from the other to find the difference
    let initialDifference = leftToRightValue - rightToLeftValue;

    //find the absolute value of the difference between the two diagonal sums
    let absoluteDifference = Math.abs(initialDifference);

    return absoluteDifference;
}

diagonalDifference(array1);