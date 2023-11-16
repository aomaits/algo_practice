const array1 = [ [11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
    
    // Add the left to right diagonal
    const leftToRightDiagonal = (array) => {
        var leftToRightValue = 0;
        
        //create the array of values to be added
        for (let i = 0; i < array.length; i++) {
            const currentSubarray = array[i];
            leftToRightValue = leftToRightValue + currentSubarray[i]
        }
        console.log(leftToRightValue)
    }

    const rightToLeftDiagonal = (array) => {
        var rightToLeftValue = 0;
        let j = 0;

        for (let i = array.length - 1; i >= 0; i--) {
            const currentSubarray = array[i];
            // console.log(currentSubarray);
            
            rightToLeftValue = rightToLeftValue + currentSubarray[j];
            j++;
        }
        console.log(rightToLeftValue);
    }

    // TODO - find the difference between the two diagonals! 
    leftToRightDiagonal(arr)
    rightToLeftDiagonal(arr)


}

diagonalDifference(array1);