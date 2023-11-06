// This algorithm challenged me to learn about 32-bit integers versus decimal numbers. 


/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    
    // n will be the numbers to query, there should be more than one? (for loop)
    // need to convert the number to its binary representation
    // then will need to flip every number in the binary number
    //then lastly convert it back to an integer
    
    
    convertToBinary = (decimalNumber) => {
        console.log(decimalNumber)
        let binaryArray = [];
        while (decimalNumber > 0) {
            
            let binaryRemainder = decimalNumber % 2;
            // console.log("remainder to be added to binary " + binaryRemainder)
            binaryArray.unshift(binaryRemainder);

            // if the number doesn't equally divide by 2, math floor the result
            decimalNumber = Math.trunc(decimalNumber / 2);
            // console.log("decimal number halved " + decimalNumber)
            // console.log(binaryArray);
        }
        console.log("binary array: " + binaryArray);
        console.log("initial array length: " + binaryArray.length)

        // if more than 32 bits? I don't think this will come into play...

        // while binaryArray.length < 32 bits, unshift 0 to the front of the array
        while (binaryArray.length < 32) {
            // console.log("looping array length: " + binaryArray.length)
            binaryArray.unshift(0);
            // console.log(binaryArray);
        }

        flipTheBinary(binaryArray);
    }

    flipTheBinary = (arr) => {
        console.log("array coming in: " + arr)
        flippedArray = []
        
        arr.forEach(binaryNumber => {
            if (binaryNumber === 0) {
                flippedArray.push(1)
            } else {
                flippedArray.push(0)
            }
        });
        console.log("array after flipped: " + flippedArray)
        binaryToDecimal(flippedArray);
    }

    binaryToDecimal = (arr) => {
        let carryingNumber;
        let decimalArray = [];
        arr.forEach(changeToDecimal)
        
        function changeToDecimal(binaryNumber, index, arr) {
            if (index === 0) {
                carryingNumber = binaryNumber;
                console.log("first number in array " + carryingNumber)
            } if (index !== 0 && (index + 1) !== arr.length) {
                // console.log(index);
                carryingNumber = (carryingNumber * 2) + binaryNumber; 
                console.log(carryingNumber)
            } if (index !==0 && (index + 1) === arr.length) {
                console.log(index);
                carryingNumber = (carryingNumber * 2) + binaryNumber; 
                console.log("final number " + carryingNumber)
            }
        }
        
    }

    convertToBinary(n);

}

flippingBits(9);
