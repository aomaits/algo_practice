const array1 = [ [11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
    var leftToRightValue = 0;
    var rightToLeftValue = 0;
    
    // Add the left to right diagonal
    const leftToRightDiagonal = (array) => {
        
        //create the array of values to be added
        for (let i = 0; i < array.length; i++) {
            const currentSubarray = array[i];
            leftToRightValue = leftToRightValue + currentSubarray[i]
        }
        return leftToRightValue;
    }
    
    const rightToLeftDiagonal = (array) => {
        let j = 0;
        
        for (let i = array.length - 1; i >= 0; i--) {
            const currentSubarray = array[i];
            
            rightToLeftValue = rightToLeftValue + currentSubarray[j];
            j++;
        }
        return rightToLeftValue
    };

    leftToRightDiagonal(arr)
    rightToLeftDiagonal(arr)

    let initialDifference = leftToRightValue - rightToLeftValue;
    absoluteDifference = Math.abs(initialDifference)
    console.log(absoluteDifference)
}

diagonalDifference(array1);